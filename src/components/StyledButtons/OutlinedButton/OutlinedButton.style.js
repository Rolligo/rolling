import styled, { css } from "styled-components";
import { COLORS } from "styles/palette";

const COLORS_OF_STATS = {
  // 각 상태에 대한 background 속성
  enabled: { color: COLORS.WHITE, border: COLORS.GRAY_300 }, // default(enabled) 속성
  hover: { color: COLORS.GRAY_100, border: COLORS.GRAY_300 },
  active: { color: COLORS.GRAY_100, border: COLORS.GRAY_300 },
  focus: { color: COLORS.WHITE, border: COLORS.GRAY_500 },
  disabled: { color: COLORS.GRAY_300, border: COLORS.GRAY_300 },
};

export const ButtonContainer = styled.button`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 1.2rem;
  font-weight: 700;
  border: 0.1rem solid
    ${({ disabled }) =>
      disabled
        ? COLORS_OF_STATS.disabled.border
        : COLORS_OF_STATS.enabled.border};
  padding: ${({ padding }) => padding};
  line-height: 2.8rem;
  font-size: 1.8rem;
  background-color: ${COLORS_OF_STATS.enabled.color};

  ${(props) =>
    props.smallSize &&
    css`
      border-radius: 0.6rem;
      font-weight: 400;
      font-size: 1.8rem;
    `};

  ${(props) =>
    props.disabled &&
    css`
      color: ${COLORS.WHITE};
      background-color: ${COLORS_OF_STATS.disabled};
      cursor: not-allowed;
      pointer-events: none;
    `};

  &:hover {
    background-color: ${COLORS_OF_STATS.hover.color};
    border: 0.1rem solid ${COLORS_OF_STATS.hover.border};
  }
  &:active {
    background-color: ${COLORS_OF_STATS.active.color};
    border: 0.1rem solid ${COLORS_OF_STATS.active.border};
  }
  &:focus {
    background-color: ${COLORS_OF_STATS.focus.color};
    border: 0.1rem solid ${COLORS_OF_STATS.focus.border};
  }
`;

export const InnerTextWrapper = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  font-weight: ${({ smallSize }) => (smallSize ? "400" : "700")};
`;
