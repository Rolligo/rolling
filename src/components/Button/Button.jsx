import * as S from "./Button.style";

function ButtonMain({
  className,
  children,
  disabled = false,
  size = "md",
  onClick,
}) {
  return (
    <S.Button
      className={className}
      disabled={disabled}
      $size={size}
      onClick={onClick}
    >
      {children}
    </S.Button>
  );
}

export default ButtonMain;
