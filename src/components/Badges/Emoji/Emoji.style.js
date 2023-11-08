import styled from "styled-components";
import { FONT_STYLE } from "styles/fontStyle";
import { onTablet, onPc } from "styles/mediaQuery";
import { COLORS } from "styles/palette";

export const Wrapper = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  width: 5.5rem;
  height: 3.2rem;
  padding: 0.6rem 0.8rem;
  border-radius: 3.2rem;
  background: rgba(0, 0, 0, 0.54);
  color: ${COLORS.WHITE};
  ${FONT_STYLE.REGULAR_14};

  ${onTablet} {
    width: 6.5rem;
    height: 3.6rem;
    padding: 0.8rem 1.2rem;
    font-size: 16px;
    font-weight: 400;
  }

  ${onPc} {
    width: 6.5rem;
    height: 3.6rem;
    padding: 0.8rem 1.2rem;
    font-size: 16px;
    font-weight: 400;
  }
`;

export const Container = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
