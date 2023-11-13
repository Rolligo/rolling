import styled from "styled-components";
import { FONT_STYLE } from "styles/fontStyle";
import { COLORS } from "styles/palette";
import { zIndexStyle } from "styles/zIndexStyle";
import { onPc } from "styles/mediaQuery";

export const Container = styled.div`
  display: grid;
  position: absolute;
  z-index: ${zIndexStyle.floating};
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 0.8rem;
  grid-row-gap: 1rem;
  top: 4.2rem;
  right: 0rem;
  padding: 2.4rem;
  border-radius: 0.8rem;
  border: 0.1rem solid ${COLORS.GRAY_300};
  background-color: ${COLORS.WHITE};
  box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.08);

  ${onPc} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Button = styled.button`
  text-align: center;
  width: 14rem;
  height: 5rem;
  padding: 1.2rem 1.6rem;
  ${FONT_STYLE.REGULAR_16}

  &:hover {
    background-color: ${COLORS.GRAY_100};
  }
`;
