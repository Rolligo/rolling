import styled from "styled-components";
import { COLORS } from "styles/palette";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 0.8rem;
  width: 4rem;
  height: 2rem;
  border-radius: 0.4rem;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: -0.007rem;
  background-color: ${({ backgroundColor }) => COLORS[backgroundColor]};
  color: ${({ textColor }) => COLORS[textColor]};
`;
