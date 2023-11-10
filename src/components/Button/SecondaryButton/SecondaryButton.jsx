import * as S from "./SecondaryButton.style";

function SecondaryButton({
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

export default SecondaryButton;
