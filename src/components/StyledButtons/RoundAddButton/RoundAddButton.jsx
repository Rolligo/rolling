import * as S from "./RoundAddButton.style";
import addIcon from "assets/images/icons/add-icon.svg";

function RoundAddButton({ width = "5.6rem", height = "5.6rem", onClick }) {
  return (
    <S.RoundBtnContainer width={width} height={height} onClick={onClick}>
      <img src={addIcon}></img>
    </S.RoundBtnContainer>
  );
}

export default RoundAddButton;
