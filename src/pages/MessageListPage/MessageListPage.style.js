import { Button } from "components/Button";
import styled from "styled-components";
import { onPc, onTablet, onTabletAndPc } from "styles/mediaQuery";
import { COLORS } from "styles/palette";
import { zIndexStyle } from "styles/zIndexStyle";

export const Background = styled.div`
  min-height: 100vh;
  position: relative;
  ${({ $backgroundColor, $backgroundImageURL }) =>
    $backgroundImageURL
      ? `
      &:after {
        content: "";
        background-image: url(${$backgroundImageURL});
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        filter: brightness(0.5);
        z-index: -1;
        background-size: cover;
        background-repeat: none;
        background-position: center;

      }
        `
      : `
        background-color: ${
          $backgroundColor === "beige"
            ? COLORS.ORANGE_200
            : $backgroundColor === "purple"
            ? COLORS.PURPLE_200
            : $backgroundColor === "blue"
            ? COLORS.BLUE_200
            : $backgroundColor === "green"
            ? COLORS.GREEN_200
            : COLORS.WHITE
        };
        `}
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

export const StyledDeleteButton = styled(Button)`
  display: none;

  ${onTablet} {
    display: none;
  }

  ${onPc} {
    display: inline-block;
  }
`;

export const ButtonContainer = styled.div`
  max-width: 120rem;
  width: 100%;
  margin-bottom: 1.6rem;
  display: flex;
  justify-content: end;
  gap: 1.6rem;
`;
