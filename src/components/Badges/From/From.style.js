import styled, { css } from "styled-components";
import { FONT_STYLE } from "styles/fontStyle";
import { COLORS } from "styles/palette";

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 8.5rem;
  height: 3rem;
`;

export const ImgContainer = styled.div`
  overflow: hidden;
  padding: 0.2rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${COLORS.WHITE};

  ${({ index, maxindex, align }) => css`
    position: absolute;
    ${align === "right"
      ? `right: ${
          maxindex < 3 ? (maxindex - index) * 1.7 : (3 - index) * 1.7
        }rem;`
      : `left: ${index * 1.7}rem;`}
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
  right: 0;
  width: 3rem;
  height: 3rem;
  border-radius: 3rem;
  border: 0.17rem solid #e3e3e3;
  background-color: ${COLORS.WHITE};
  color: ${COLORS.GRAY_500};
  ${FONT_STYLE.REGULAR_12};
`;
