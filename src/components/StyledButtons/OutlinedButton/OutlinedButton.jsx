import * as S from "./OutlinedButton.style";

function OutlinedButton({ children, disabled, size, onClick }) {
  return (
    <S.ButtonContainer disabled={disabled} $size={size} onClick={onClick}>
      {children}
    </S.ButtonContainer>
  );
}

export default OutlinedButton;
