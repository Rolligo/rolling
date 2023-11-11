import styled, { css } from "styled-components";
import { COLORS } from "styles/palette";

export const ToggleBtn = styled.button`
  border-radius: 0.6rem;
  border: none;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  background-color: ${COLORS.GRAY_100};
`;

export const Selected = styled.div`
  background-color: ${COLORS.WHITE};
  border: 0.2rem solid ${COLORS.PURPLE_600};
  width: 12.2rem;
  border-radius: 0.6rem;
  padding: 0.5rem 1.6rem;
  position: absolute;
  font-weight: 700;
  line-height: 2.6rem;
  letter-spacing: -0.016rem;
  color: ${COLORS.PURPLE_700};
  text-align: center;
  left: 0%;
  transition: all 0.3s ease-in-out;
  ${(props) =>
    props.toggle &&
    css`
      transform: translate(12.2rem, 0);
    `}
`;

export const Container = styled.div`
  display: flex;
  padding: 0.7rem 1.6rem;
  transition: all 0.3s ease-in-out;
`;

export const Text = styled.h4`
  color: ${COLORS.GRAY_900};
  width: 9rem;
  font-weight: 700;
  line-height: 2.6rem;
  letter-spacing: -0.016rem;
`;
