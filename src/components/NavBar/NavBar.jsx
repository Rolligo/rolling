import logoIcon from "assets/images/icons/logoIcon.png";
import NavWhiteButton from "components/StyledButtons/NavWhiteButton";
import * as S from "./NavBar.style";
import { Link } from "react-router-dom";

function NavBar({ showButton = true }) {
  // 롤링 페이퍼 만들기 버튼이 필요없는 페이지에서 사용하기 위해 사용하는 페이지에서 showButton prop의 값으로 false를 받으면 안 보이도록 수정함
  return (
    <div>
      <S.Wrapper>
        <S.Container>
          <Link to="/">
            <S.LogoImage img src={logoIcon} alt="logo" />
          </Link>
          <Link to="/post">
            {showButton && <NavWhiteButton>롤링 페이퍼 만들기</NavWhiteButton>}
          </Link>
        </S.Container>
      </S.Wrapper>
      <S.BottomLine />
    </div>
  );
}

export default NavBar;
