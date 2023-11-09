import * as S from "./NavBarSub.style";
import Emoji from "components/Badges/Emoji";
// import OutlinedButton from "components/StyledButtons/OutlinedButton";
// import addIcon from "assets/images/icons/add-icon.svg";
import addEmoticon from "assets/images/icons/add-emoticon.svg";
import ArrowIcon from "assets/images/icons/arrow_down.svg";
import OutlinedButton from "components/StyledButtons/OutlinedButton";

function NavBarSub() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Header>
          <S.ToContainer>To. Ashley Kim</S.ToContainer>
        </S.Header>
        <S.HeaderService>
          <S.Container2>
            <S.EmojiContainer>
              <S.EmojiWrapper>
                <Emoji />
                <Emoji />
                <Emoji />
              </S.EmojiWrapper>
              <S.Button><img src={ArrowIcon} /></S.Button>
            </S.EmojiContainer>
            <S.ButtonContainer>
              <OutlinedButton width="3.6rem" height="3.2rem" smallSize>
                <img src={addEmoticon} />
              </OutlinedButton>
              <S.Border />
              <OutlinedButton width="3.6rem" height="3.2rem" smallSize>
                <img src={addEmoticon} />
              </OutlinedButton>
            </S.ButtonContainer>
          </S.Container2>
        </S.HeaderService>
      </S.Container>
    </S.Wrapper>
  );
}
export default NavBarSub;