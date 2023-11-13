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

function NavBarSub({ data }) {
  const name = data?.name;
  const count = data?.messageCount;
  const reactions = data?.topReactions;
  const recentMessages = data?.recentMessages;

  const fromImgUrls = [
    recentMessages?.[0]?.profileImageURL,
    recentMessages?.[1]?.profileImageURL,
    recentMessages?.[2]?.profileImageURL,
  ];

  const [showPicker, setShowPicker] = useState(false);
  const pickerRef = useRef(null);

  const closePicker = (e) => {
    if (pickerRef.current && !pickerRef.current.contains(e.target)) {
      setShowPicker(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", closePicker);
    return () => {
      document.removeEventListener("click", closePicker);
    };
  }, []);

  const [showShare, setShowShare] = useState(false);
  const shareRef = useRef(null);

  const closeShare = (e) => {
    if (shareRef.current && !shareRef.current.contains(e.target)) {
      setShowShare(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeShare);
    return () => {
      document.removeEventListener("click", closeShare);
    };
  }, []);

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
              {reactions &&
                reactions.map((reaction) => {
                  return (
                    <Emoji
                      key={reaction.id}
                      emoji={reaction.emoji}
                      count={reaction.count}
                    />
                  );
                })}
            </S.EmojiWrapper>
            <S.EmojiButton>
              <img src={ArrowIcon} />
            </S.EmojiButton>
          </S.EmojiContainer>
          <S.ButtonContainer>
            <div ref={pickerRef}>
              <Button.Outline size="xs" onClick={(e) => {
                e.preventDefault();
                setShowPicker(!showPicker);
              }}>
                <img src={addEmoticon} />
                <S.ButtonText>추가</S.ButtonText>
              </Button.Outline>
              {showPicker && 
                <S.EmojiPickerWrapper>
                  <EmojiPicker />
                </S.EmojiPickerWrapper>
              }
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
