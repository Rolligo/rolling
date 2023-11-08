import styled, { css } from "styled-components";
import { COLORS } from "styles/palette";

const COLORS_OF_STATS = {
  enabled: COLORS.WHITE, // default(enabled) 색상
  hover: COLORS.PURPLE_100,
  active: COLORS.PURPLE_100,
  focus: COLORS.WHITE,
  disabled: COLORS.GRAY_300,
};

export const ButtonContainer = styled.button`
  width: ${({ width }) => width};
  height: 5.6rem;
  margin: ${({ margin }) => margin};
  border-radius: 1.2rem;
  border: 1px solid ${COLORS.PURPLE_600};
  padding: 1.4rem 2.4rem;
  color: ${COLORS.PURPLE_700};
  font-weight: 700;
  line-height: 2.8rem;
  font-size: 1.8rem;
  background-color: ${COLORS_OF_STATS.enabled};

  ${(props) =>
    props.smallSize &&
    css`
      height: 4rem;
      border-radius: 0.6rem;
      padding: 0.7rem 1.6rem;
      font-weight: 400;
      font-size: 1.6rem;
    `};

  ${(props) =>
    props.disabled &&
    css`
      border: none;
      color: ${COLORS.WHITE};
      background-color: ${COLORS_OF_STATS.disabled};
      cursor: not-allowed;
      pointer-events: none;
    `};

  &:hover {
    background-color: ${COLORS_OF_STATS.hover};
  }
  &:active {
    background-color: ${COLORS_OF_STATS.active};
  }
  &:focus {
    background-color: ${COLORS_OF_STATS.focus};
  }
`;
