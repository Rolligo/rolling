import * as S from "./RoundAddButton.style";
import addIcon from "assets/images/icons/add-icon.svg";

function RoundAddButton({ width = "5.6rem", height = "5.6rem" }) {
  return (
    <S.RoundBtnContainer width={width} height={height}>
      <img src={addIcon}></img>
    </S.RoundBtnContainer>
  );
}

export default RoundAddButton;
