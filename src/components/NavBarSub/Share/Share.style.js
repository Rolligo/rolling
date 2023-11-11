import styled from "styled-components";
import { FONT_STYLE } from "styles/fontStyle";
import { COLORS } from "styles/palette";
import { zIndexStyle } from "styles/zIndexStyle";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: ${zIndexStyle.floating};
  top: 4rem;
  right: 0rem;
  padding: 1rem 0;
  border-radius: 0.8rem;
  border: 0.1rem solid ${COLORS.GRAY_300};
  background-color: ${COLORS.WHITE};
  box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.08);
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
