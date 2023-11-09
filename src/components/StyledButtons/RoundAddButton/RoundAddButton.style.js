import styled, { css } from "styled-components";
import { COLORS } from "styles/palette";

export const ButtonContainer = styled.button`
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 50%;
  padding: 1.6rem;
  background-color: ${COLORS.GRAY_500};

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${COLORS.GRAY_300};
      cursor: not-allowed;
      pointer-events: none;
    `}

  &:hover {
    background-color: ${COLORS.GRAY_600};
  }
  &:active {
    background-color: ${COLORS.GRAY_700};
  }
  &:focus {
    background-color: ${COLORS.GRAY_800};
  }
`;
