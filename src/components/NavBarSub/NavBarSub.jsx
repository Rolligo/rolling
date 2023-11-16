import * as S from "./NavBarSub.style";
import Emoji from "components/Badges/Emoji";
import addEmoticon from "assets/images/icons/add-emoticon.svg";
import shareIcon from "assets/images/icons/shareIcon.svg";
import ArrowIcon from "assets/images/icons/arrow_down.svg";
import { Button } from "components/Button";
import From from "components/Badges/From";
import { useEffect, useRef, useState } from "react";
import Share from "./Share";
import EmojiPicker from "emoji-picker-react";
import EmojiList from "./EmojiList";
import useRequest from "hooks/useRequest";

function NavBarSub({ data }) {
  const id = data?.id;

  // 롤링페이퍼 정보 데이터 가져오기
  const { data: paperData, fetch: fetchTopReaction } = useRequest({
    options: {
      url: `recipients/${id}/`,
    },
  });

  const name = paperData?.name;
  const count = paperData?.messageCount;
  const topReactions = paperData?.topReactions;
  const recentMessages = paperData?.recentMessages;

  // 리액션 리스트 가져오기
  const { data: reactionListData, fetch: fetchReactions } = useRequest({
    options: {
      url: `recipients/${id}/reactions/`,
    },
  });
  let reactionList = reactionListData?.results;

  const fromImgUrls = [
    recentMessages?.[0]?.profileImageURL,
    recentMessages?.[1]?.profileImageURL,
    recentMessages?.[2]?.profileImageURL,
  ];

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [showEmojiList, setShowEmojiList] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [refreshEmoji, setRefreshEmoji] = useState(1);
  const mounted = useRef(false);

  const pickerRef = useRef(null);
  const shareRef = useRef(null);
  const EmojiListRef = useRef(null);

  // 새로 선택되어 서버에 업로드 할 리액션 객체
  const newUploadingEmoji = {
    emoji: selectedEmoji,
    type: "increase", // increase or decrease string needed
  };

  // 선택한 리액션 서버에 업로드하기(적용하기)
  const { fetch } = useRequest({
    skip: true,
    options: {
      url: `recipients/${id}/reactions/`,
      method: "post",
      header: {
        "Content-Type": "application/json",
      },
      data: newUploadingEmoji,
    },
  });

  const uploadEmoji = async () => {
    const { error } = await fetch();
    if (error) {
      alert("서버 오류로 이모지 등록에 실패하였습니다.");
    }
  };

  const handleEmojiClick = async (emoji) => {
    setSelectedEmoji(emoji);
    // 리랜더링 강제 발생시키기
    setRefreshEmoji(refreshEmoji * -1);

    // 서버에서 업데이트된 데이터 fetch 해오기
    const { error: fetchTopReactionError } = await fetchTopReaction();
    const { error: fetchReactionsError } = await fetchReactions();
  };

  const closePopOverContainers = (e) => {
    if (shareRef.current && !shareRef.current.contains(e.target)) {
      setShowShare(false);
    }
    if (pickerRef.current && !pickerRef.current.contains(e.target)) {
      setShowEmojiPicker(false);
    }
    if (EmojiListRef.current && !EmojiListRef.current.contains(e.target)) {
      setShowEmojiList(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closePopOverContainers);
    return () => {
      document.removeEventListener("click", closePopOverContainers);
    };
  }, []);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      uploadEmoji();
    }
  }, [refreshEmoji]);

  return (
    <S.Container>
      <S.Wrapper>
        <S.Header>
          <S.ToContainer>To. {name}</S.ToContainer>
        </S.Header>
        <S.HeaderService>
          <S.ProfileContainer>
            <S.ProfileWrapper>
              <From imgUrls={fromImgUrls} count={count} />
              <S.ProfileText>
                <S.Count>{count}</S.Count>명이 작성했어요!
              </S.ProfileText>
            </S.ProfileWrapper>
            <S.Border />
          </S.ProfileContainer>
          <S.EmojiContainer>
            <S.EmojiWrapper>
              {topReactions &&
                topReactions.map((reaction) => {
                  return (
                    <Emoji
                      key={reaction.id}
                      emoji={reaction.emoji}
                      count={reaction.count}
                    />
                  );
                })}
            </S.EmojiWrapper>
            <div ref={EmojiListRef}>
              <S.EmojiButton
                onClick={(e) => {
                  e.preventDefault();
                  setShowEmojiList((curr) => !curr);
                }}
              >
                <img src={ArrowIcon} />
              </S.EmojiButton>
              {showEmojiList && <EmojiList reactions={reactionList} />}
            </div>
          </S.EmojiContainer>
          <S.ButtonContainer>
            <div ref={pickerRef}>
              <Button.Outline
                size="xs"
                onClick={(e) => {
                  e.preventDefault();
                  setShowEmojiPicker(!showEmojiPicker);
                }}
              >
                <img src={addEmoticon} />
                <S.ButtonText>추가</S.ButtonText>
              </Button.Outline>
              {showEmojiPicker && (
                <S.EmojiPickerWrapper>
                  <EmojiPicker
                    onEmojiClick={({ emoji }) => handleEmojiClick(emoji)}
                  />
                </S.EmojiPickerWrapper>
              )}
            </div>
            <S.Border />
            <div ref={shareRef}>
              <Button.Outline
                size="xs"
                onClick={(e) => {
                  e.preventDefault();
                  setShowShare((curr) => !curr);
                }}
              >
                <img src={shareIcon} />
              </Button.Outline>
              {showShare && <Share />}
            </div>
          </S.ButtonContainer>
        </S.HeaderService>
      </S.Wrapper>
    </S.Container>
  );
}
export default NavBarSub;
