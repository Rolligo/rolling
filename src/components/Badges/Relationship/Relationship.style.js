import styled from "styled-components";
import { FONT_STYLE } from "styles/fontStyle";
import { COLORS } from "styles/palette";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 0.8rem;
  width: 4rem;
  height: 2rem;
  border-radius: 0.4rem;
  ${FONT_STYLE.REGULAR_14};
  background-color: ${({ backgroundColor }) => COLORS[backgroundColor]};
  color: ${({ textColor }) => COLORS[textColor]};
`;
