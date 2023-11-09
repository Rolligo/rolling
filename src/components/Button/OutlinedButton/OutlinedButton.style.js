import styled, { css } from "styled-components";
import { onPc, onTablet } from "styles/mediaQuery";
import { COLORS } from "styles/palette";
import { FONT_STYLE } from "styles/fontStyle";

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  flex-shrink: 0;
  border: 0.1rem solid ${COLORS.GRAY_300};
  color: ${COLORS.GRAY_900};
  text-align: center;

  ${({ $size }) => {
    switch ($size) {
      case "full":
        return css`
          width: 100%;
          height: 5.6rem;
          padding: 1.4rem 2.4rem;
          border-radius: 1.2rem;
          ${FONT_STYLE.BOLD_18};
        `;
      case "lg":
        return css`
          min-width: 28rem;
          height: 5.6rem;
          padding: 1.4rem 2.4rem;
          border-radius: 1.2rem;
          ${FONT_STYLE.BOLD_18};
        `;
      case "md":
        return css`
          min-width: 12rem;
          height: 4rem;
          padding: 0.8rem 1.6rem;
          border-radius: 0.6rem;
          ${FONT_STYLE.REGULAR_16};
        `;
      case "sm":
        return css`
          min-width: 9rem;
          height: 4rem;
          padding: 0.8rem 1.6rem;
          border-radius: 0.6rem;
          font-size: 1.6rem;
          font-weight: 500;
          line-height: 2.4rem;
        `;
      case "xs":
        return css`
          height: 3.6rem;
          padding: 0.6rem 0.8rem;
          border-radius: 0.6rem;
          font-size: 1.6rem;
          font-weight: 500;
          line-height: 2.4rem;

          ${onTablet} {
            padding: 0.6rem 1.6rem;
          }

          ${onPc} {
            padding: 0.6rem 1.6rem;
          }
        `;
      case "square":
        return css`
          width: 4rem;
          height: 4rem;
          padding: 0.8rem 0.8rem;
          border-radius: 0.6rem;
          font-size: 1.6rem;
          font-weight: 500;
          line-height: 2.4rem;
        `;
    }
  }};

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${COLORS.GRAY_300};
      color: ${COLORS.WHITE};
      cursor: not-allowed;
      pointer-events: none;
    `}

  &:hover {
    border: 0.1rem solid ${COLORS.GRAY_300};
    background-color: ${COLORS.GRAY_100};
  }
  &:active {
    border: 0.1rem solid ${COLORS.GRAY_300};
    background-color: ${COLORS.GRAY_100};
  }
  &:focus {
    border: 0.1rem solid ${COLORS.GRAY_500};
  }
`;
