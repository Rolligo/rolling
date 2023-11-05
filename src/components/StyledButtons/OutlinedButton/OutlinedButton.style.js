import styled from "styled-components";
import { COLORS } from "styles/palette";

const COLORS_OF_STATS = {
  // 각 상태에 대한 background 속성
  enabled: { color: COLORS.WHITE, border: COLORS.GRAY_300 }, // default(enabled) 속성
  hover: { color: COLORS.GRAY_100, border: COLORS.GRAY_300 },
  active: { color: COLORS.GRAY_100, border: COLORS.GRAY_300 },
  focus: { color: COLORS.WHITE, border: COLORS.GRAY_500 },
  disabled: { color: COLORS.GRAY_300, border: COLORS.GRAY_300 },
};

// possible props : width{Num(56,40,36,28)}, height, margin{Num}, disabled{Boolean}, smallSize{Boolean}
export const ButtonContainer = styled.button`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  position: relative;
  border-radius: 1.2rem;
  border: 0.1rem solid
    ${({ disabled }) =>
      disabled
        ? COLORS_OF_STATS.disabled.border
        : COLORS_OF_STATS.enabled.border};
  padding: ${({ smallSize }) =>
    smallSize ? "0.2rem 1.6rem" : "1.4rem 2.4rem"};
  color: ${({ disabled }) => disabled && COLORS.WHITE};
  font-weight: ${({ smallSize }) => (smallSize ? "400" : "700")};
  line-height: 2.8rem;
  font-size: ${({ smallSize }) => (smallSize ? "1.6" : "1.8")}rem;
  background-color: ${({ disabled }) =>
    disabled ? COLORS_OF_STATS.disabled.color : COLORS_OF_STATS.enabled.color};

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

export const AddEmoji = styled.image`
  width: 2.4rem;
  height: 2.4rem;
  position: absolute;
  top: 1px;
  left: 1px;
`;
