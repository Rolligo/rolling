import styled, { css } from "styled-components";
import { onPc, onTablet } from "styles/mediaQuery";
import { COLORS } from "styles/palette";
import { FONT_STYLE } from "styles/fontStyle";

export const Button = styled.button`
  background-color: ${COLORS.PURPLE_600};
  color: ${COLORS.WHITE};
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
          min-width: 20.8rem;
          height: 5.6rem;
          padding: 1.4rem 2.4rem;
          border-radius: 1.2rem;
          ${FONT_STYLE.BOLD_18};
        `;
      case "md":
        return css`
          min-width: 9rem;
          height: 4rem;
          padding: 0.8rem 1.6rem;
          border-radius: 0.6rem;
          ${FONT_STYLE.REGULAR_16};
        `;
      case "sm":
        return css`
          min-width: 5.6rem;
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
    }
  }};

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${COLORS.GRAY_300};
      cursor: not-allowed;
      pointer-events: none;
    `}

  &:hover {
    background-color: ${COLORS.PURPLE_700};
  }
  &:active {
    background-color: ${COLORS.PURPLE_800};
  }
  &:focus {
    background-color: ${COLORS.PURPLE_900};
  }
`;
