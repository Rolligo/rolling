import * as S from "./ArrowButton.style";
import rightArrowIcon from "assets/images/icons/arrowright-icon.svg";
import leftArrowIcon from "assets/images/icons/arrowleft-icon.svg";

function ArrowButton({ right = false, left = false }) {
  return (
    <S.ButtonContainer>
      <img src={(right && rightArrowIcon) || (left && leftArrowIcon)} />
    </S.ButtonContainer>
  );
}

export default ArrowButton;
