import styled, { css } from "styled-components";
import { COLORS } from "styles/palette";

const COLORS_OF_STATS = {
  enabled: COLORS.GRAY_500, // default(enabled) 색상
  hover: COLORS.GRAY_600,
  disabled: COLORS.GRAY_300,
  active: COLORS.GRAY_700,
  focus: COLORS.GRAY_800,
};

export const RoundBtnContainer = styled.button`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 10rem;
  padding: 1.6rem;
  background-color: ${COLORS_OF_STATS.enabled}; // 실제 카드리스트 렌더링 시 enabled 상태에서 보이지 않아서 추가 작성함

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
