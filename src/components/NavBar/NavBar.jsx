import logoIcon from "assets/images/icons/logoIcon.png";
import * as S from "./NavBar.style";
import { Link } from "react-router-dom";
import { Button } from "components/Button";

function NavBar({ showButton = true }) {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Container>
          <Link to="/">
            <S.LogoImage img src={logoIcon} alt="logo" />
          </Link>
          <Link to="/post">
            {showButton && (
              <Button.Outline size="md">롤링 페이퍼 만들기</Button.Outline>
            )}
          </Link>
        </S.Container>
      </S.Content>
      <S.BottomLine />
    </S.Wrapper>
  );
}

export default NavBar;
