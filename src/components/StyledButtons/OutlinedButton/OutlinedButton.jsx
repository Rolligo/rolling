import * as S from "./OutlinedButton.style";

function OutlinedButton({ className, children, disabled, size, onClick }) {
  return (
    <S.ButtonContainer
      className={className}
      disabled={disabled}
      $size={size}
      onClick={onClick}
    >
      {children}
    </S.ButtonContainer>
  );
}

export default OutlinedButton;
