import * as S from "./SecondaryButton.style";

function SecondaryButton({ children, disabled, size, onClick }) {
  return (
    <S.ButtonContainer disabled={disabled} $size={size} onClick={onClick}>
      {children}
    </S.ButtonContainer>
  );
}

export default SecondaryButton;
