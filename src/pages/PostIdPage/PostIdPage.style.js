import { Button } from "components/Button";
import styled from "styled-components";
import { onPc, onTablet, onTabletAndPc } from "styles/mediaQuery";
import { COLORS } from "styles/palette";
import { zIndexStyle } from "styles/zIndexStyle";

export const Background = styled.div`
  min-height: 100vh;
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor === "beige"
      ? COLORS.ORANGE_200
      : $backgroundColor === "purple"
      ? COLORS.PURPLE_200
      : $backgroundColor === "blue"
      ? COLORS.BLUE_200
      : $backgroundColor === "green"
      ? COLORS.GREEN_200
      : COLORS.WHITE};
  background-image: url(${({ $backgroundImageURL }) => $backgroundImageURL});
`;

export const NavBarContainer = styled.div`
  display: none;

  ${onTabletAndPc} {
    display: block;
  }
`;

export const MainDiv = styled.div`
  position: relative;
  padding: 2.4rem 2rem 3.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${onTablet} {
    padding-top: 4.9rem;
    padding-left: 2.4rem;
    padding-right: 2.4rem;
  }

  ${onPc} {
    padding-top: 6.3rem;
  }
`;

export const EditButton = styled.div`
  max-width: 120rem;
  width: 100%;
  margin-bottom: 1.6rem;
  display: flex;
  justify-content: end;
`;

export const StyledOutlinedButton = styled(Button.Outline)`
  background-color: ${COLORS.WHITE};
`;

export const DeleteButton = styled.div`
  position: fixed;
  bottom: 2.4rem;
  z-index: ${zIndexStyle.floating};
  width: calc(100% - 4rem);

  ${onTablet} {
    width: calc(100% - 4.8rem);
  }

  ${onPc} {
    display: none;
  }
`;

export const DeleteButtonOnPc = styled.div`
  display: none;

  ${onTablet} {
    display: none;
  }

  ${onPc} {
    max-width: 120rem;
    width: 100%;
    margin-bottom: 1.1rem;
    display: flex;
    justify-content: end;
  }
`;
