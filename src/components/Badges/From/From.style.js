import styled, { css } from "styled-components";
import { FONT_STYLE } from "styles/fontStyle";
import { COLORS } from "styles/palette";

export const Container = styled.div`
  display: flex;
  position: relative;
  height: 3rem;

  ${({ $count }) => {
    if ($count >= 4) {
      return css`
        width: 8.4rem;
      `;
    }
    return css`
      width: ${($count - 1) * 1.6 + 3}rem;
    `;
  }}
`;

export const ImgContainer = styled.div`
  overflow: hidden;
  padding: 0.2rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${COLORS.WHITE};

  ${({ $index }) => css`
    position: absolute;
    left: ${$index * 1.7}rem;
  `}
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

export const CountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: ${({ $index }) => $index * 1.7}rem;
  width: 3rem;
  height: 3rem;
  border-radius: 3rem;
  border: 0.17rem solid ${COLORS.GRAY_300};
  background-color: ${COLORS.WHITE};
  color: ${COLORS.GRAY_500};
  ${FONT_STYLE.REGULAR_12};
`;
