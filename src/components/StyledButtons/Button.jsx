import * as S from "./Button.style";

function ButtonMain({ disabled, children, size, onClick }) {
  return (
    <S.Button disabled={disabled} $size={size} onClick={onClick}>
      {children}
    </S.Button>
  );
}

export default ButtonMain;
