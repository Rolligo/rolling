import * as S from "./Button.style";

function ButtonMain({ className, disabled, children, size, onClick }) {
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
