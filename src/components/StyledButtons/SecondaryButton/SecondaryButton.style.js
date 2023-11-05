import styled from "styled-components";
import { COLORS } from "styles/palette";

const BACKGROUND_STYLES = {
  enabled: COLORS.PURPLE_600, // default(enabled) 색상
  hover: COLORS.PURPLE_700,
  active: COLORS.PURPLE_800,
  focus: COLORS.PURPLE_900,
  disabled: COLORS.GRAY_300,
};

// possible props : width {Number}, margin {Number}, isEnabled {Boolean}
export const ButtonContainer = styled.button`
  width: ${({ width }) => width};
  height: ${({ smallSize }) => (smallSize ? "40" : "56")}px
  margin: ${({ margin }) => margin};
  border-radius: 12px;
  padding: ${({ smallSize }) => (smallSize ? "7px 16px" : "14px 24px")};
  color: ${COLORS.WHITE};
  font-weight: ${({ smallSize }) => (smallSize ? "400" : "700")};
  line-height: 28px;
  font-size: ${({ smallSize }) => (smallSize ? "1.8" : "1.6")}rem;
  background-color: ${({ isEnabled }) =>
    isEnabled ? BACKGROUND_STYLES.enabled : BACKGROUND_STYLES.disabled};

  &:hover {
    background-color: ${BACKGROUND_STYLES.hover};
  }
  &:active {
    background-color: ${BACKGROUND_STYLES.active};
  }
  &:focus {
    background-color: ${BACKGROUND_STYLES.focus};
  }
`;
