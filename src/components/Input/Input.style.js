import styled, { css } from "styled-components";
import { FONT_STYLE } from "styles/fontStyle";
import { COLORS } from "styles/palette";

export const InputArea = styled.div`
  width: 100%;
`;

export const InputContainer = styled.input`
  width: 100%;
  padding: 1.2rem 1.6rem;
  border-radius: 0.8rem;
  border-width: 0.1rem;
  border-style: solid;
  border-color: ${({ error }) => (error ? COLORS.ERROR : COLORS.GRAY_300)};
  background-color: ${COLORS.WHITE};
  color: ${({ error }) => (error ? COLORS.GRAY_900 : COLORS.GRAY_500)};
  ${FONT_STYLE.REGULAR_16};

  &:focus {
    border-width: 0.2rem;
    border-color: ${COLORS.GRAY_500};
    color: ${COLORS.GRAY_900};
  }
  &:active {
    border-width: 0.2rem;
    border-color: ${COLORS.GRAY_700};
    color: ${COLORS.GRAY_900};
  }
  &:hover {
    border-color: ${({ error }) => (error ? COLORS.ERROR : COLORS.GRAY_500)};
    color: ${COLORS.GRAY_500};
  }
  ${(props) =>
    props.disabled &&
    css`
      border-color: ${COLORS.GRAY_300};
      background-color: ${COLORS.GRAY_100};
    `}
`;
export const InputError = styled.p`
  margin-top: 0.4rem;
  color: ${COLORS.ERROR};
  ${FONT_STYLE.REGULAR_12};
`;
