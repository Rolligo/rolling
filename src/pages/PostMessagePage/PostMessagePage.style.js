import styled from "styled-components";
import { onPc, onTablet } from "styles/mediaQuery";
import { FONT_STYLE } from "styles/fontStyle";
import { COLORS } from "styles/palette";

export const PostMessagePageDiv = styled.main`
  padding: 0 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${onTablet} {
    padding: 0 auto;
  }

  ${onPc} {
  }
`;

export const Section = styled.section`
  width: 100%;
  background: ${COLORS.SURFACE};
  padding: 5rem 0 0 0;
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;

  ${onTablet} {
    width: 70.6rem;
  }

  ${onPc} {
    padding: 6rem 6rem;
    width: 100%;
    max-width: 114rem;
  }
`;

export const H1 = styled.div`
  margin-bottom: 1.2rem;

  color: ${COLORS.GRAY_900};
  ${FONT_STYLE.BOLD_24}
  font-weight: 700;

  ${onTablet} {
  }

  ${onPc} {
  }
`;
