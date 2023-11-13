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

function NavBarSub({ paperData, reactionListData }) {
  const name = paperData?.name;
  const count = paperData?.messageCount;
  const topReactions = paperData?.topReactions;
  const recentMessages = paperData?.recentMessages;
  const id = paperData?.id;
  const reactionList = reactionListData?.results;

  const fromImgUrls = [
    recentMessages?.[0]?.profileImageURL,
    recentMessages?.[1]?.profileImageURL,
    recentMessages?.[2]?.profileImageURL,
  ];

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [showEmojiList, setShowEmojiList] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const mounted = useRef(false);

  const pickerRef = useRef(null);
  const shareRef = useRef(null);
  const EmojiListRef = useRef(null);

  const newUploadingEmoji = {
    emoji: selectedEmoji,
    type: "increase", // increase or decrease string needed
  };

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

  const loadReactions = async () => {
    const { error } = await fetch();
    if (!error) {
      window.location.reload();
    } else {
      alert("서버 오류로 이모지 등록에 실패하였습니다.");
    }
  };

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
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
      loadReactions();
    }
  }, [selectedEmoji]);

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
