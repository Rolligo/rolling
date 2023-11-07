import styled from "styled-components";
import { COLORS } from "styles/palette";

const COLORS_OF_STATS = {
  enabled: COLORS.PURPLE_600, // default(enabled) 색상
  hover: COLORS.PURPLE_700,
  active: COLORS.PURPLE_800,
  focus: COLORS.PURPLE_900,
  disabled: COLORS.GRAY_300,
};

// possible props : width{Number}, margin{Number}, disabled{Boolean}, smallSize{Boolean}
export const ButtonContainer = styled.button`
  width: ${({ width }) => width};
  height: ${({ smallSize }) => (smallSize ? "4" : "5.6")}rem;
  margin: ${({ margin }) => margin};
  border-radius: 1.2rem;
  padding: ${({ smallSize }) =>
    smallSize ? "0.7rem 1.6rem" : "1.4rem 2.4rem"};
  color: ${COLORS.WHITE};
  font-weight: ${({ smallSize }) => (smallSize ? "400" : "700")};
  line-height: 2.8rem;
  font-size: ${({ smallSize }) => (smallSize ? "1.6" : "1.8")}rem;
  background-color: ${({ disabled }) =>
    disabled ? COLORS_OF_STATS.disabled : COLORS_OF_STATS.enabled};

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
