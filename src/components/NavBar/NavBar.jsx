import logoIcon from "assets/images/icons/logoIcon.png";
import NavWhiteButton from "components/StyledButtons/NavWhiteButton";
import * as S from "./NavBar.style";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <S.Wrapper>
        <S.Container>
          <Link to="/">
            <S.LogoImage img src={logoIcon} alt="logo" />
          </Link>
          <Link to="/post">
            <NavWhiteButton>롤링 페이퍼 만들기</NavWhiteButton>
          </Link>
        </S.Container>
      </S.Wrapper>
      <S.BottomLine />
    </div>
  );
}

export default NavBar;
