import * as S from "./NavWhiteButton.style";

function NavWhiteButton({ children, onClick }) {
  return <S.ButtonContainer onClick={onClick}>{children}</S.ButtonContainer>;
}

export default NavWhiteButton;
