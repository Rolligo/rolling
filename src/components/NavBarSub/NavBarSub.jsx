import * as S from "./NavBarSub.style";
import Emoji from "components/Badges/Emoji";
import addEmoticon from "assets/images/icons/add-emoticon.svg";
import shareIcon from "assets/images/icons/shareIcon.svg";
import ArrowIcon from "assets/images/icons/arrow_down.svg";
import OutlinedButton from "components/StyledButtons/OutlinedButton";

function NavBarSub() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Header>
          <S.ToContainer>To. Ashley Kim</S.ToContainer>
        </S.Header>
        <S.HeaderService>
          <S.ProfileContainer>
            <S.ProfileWrapper>
              <S.ProfileGroup>
                <S.Profile />
                <S.Profile />
                <S.Profile />
              </S.ProfileGroup>
              <S.ProfileText>
                <S.Count>23</S.Count>명이 작성했어요!
              </S.ProfileText>
            </S.ProfileWrapper>
            <S.Border />
          </S.ProfileContainer>
          <S.EmojiContainer>
            <S.EmojiWrapper>
              <Emoji />
              <Emoji />
              <Emoji />
            </S.EmojiWrapper>
            <S.EmojiButton>
              <img src={ArrowIcon} />
            </S.EmojiButton>
          </S.EmojiContainer>
          <S.ButtonContainer>
            <OutlinedButton width="3.6rem" height="3.2rem" smallSize>
              <img src={addEmoticon} />
            </OutlinedButton>
            <S.Border />
            <OutlinedButton width="3.6rem" height="3.2rem" smallSize>
              <img src={shareIcon} />
            </OutlinedButton>
          </S.ButtonContainer>
        </S.HeaderService>
      </S.Wrapper>
    </S.Container>
  );
}
export default NavBarSub;