import styled, { css } from "styled-components";
import { COLORS } from "styles/palette";

export const ToggleBtn = styled.button`
  border-radius: 6px;
  border: none;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;

export const Selected = styled.div`
  background-color: ${COLORS.WHITE};
  border: 2px solid ${COLORS.PURPLE_600};
  width: 122px;
  border-radius: 6px;
  padding: 5px 16px;
  position: absolute;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: -0.16px;
  color: ${COLORS.PURPLE_700};
  text-align: center;
  left: 0%;
  transition: all 0.5s ease-in-out;
  ${(props) =>
    props.toggle &&
    css`
      transform: translate(122px, 0);
      transition: all 0.5s ease-in-out;
    `}
`;

export const Container = styled.div`
  display: flex;
  padding: 7px 16px;
  background-color: ${COLORS.GRAY_100};
  background-color: ${(props) =>
    !props.toggle ? COLORS.WHITE : COLORS.GRAY_100};
  transition: all 0.5s ease-in-out;
`;

export const Text = styled.h4`
  color: ${COLORS.GRAY_900};
  width: 90px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: -0.16px;
`;
