import * as S from "./OutlinedButton.style";

function OutlinedButton({
  className,
  children,
  disabled = false,
  size = "md",
  onClick,
}) {
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
