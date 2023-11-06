import styled, { css } from "styled-components";
import { COLORS } from "styles/palette";

export const InputContainer = styled.input`
  width: 20rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border-width: 0.06rem;
  border-style: solid;
  border-color: ${({ error }) => error ? COLORS.ERROR : COLORS.GRAY_300};
  background-color: ${COLORS.WHITE};
  color: ${({ error }) => error ? COLORS.GRAY_900 : COLORS.GRAY_500};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 162.5%;
  letter-spacing: -0.01rem;

  &:focus {
    border-width: 0.13rem;
    border-color: ${COLORS.GRAY_500};
    color: ${COLORS.GRAY_900};
  }
  &:active {
    border-width: 0.13rem;
    border-color: ${COLORS.GRAY_700};
    color: ${COLORS.GRAY_900};
  }
  &:hover {
    border-color: ${COLORS.GRAY_500};
    color: ${COLORS.GRAY_500};
  }
  ${(props) => props.disabled &&
    css`
    border-color: ${COLORS.GRAY_300};
    background-color: ${COLORS.GRAY_100};
  `}
`;
export const InputError = styled.p`
  color: ${COLORS.ERROR};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.00375rem;
  margin-top: 0.25rem;
`;  