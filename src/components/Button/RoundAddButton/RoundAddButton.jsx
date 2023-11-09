import * as S from "./RoundAddButton.style";
import addIcon from "assets/images/icons/add-icon.svg";

function RoundAddButton({ disabled, onClick }) {
  return (
    <S.ButtonContainer disabled={disabled} onClick={onClick}>
      <img src={addIcon}></img>
    </S.ButtonContainer>
  );
}

export default RoundAddButton;
