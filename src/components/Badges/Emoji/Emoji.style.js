import styled from "styled-components";
import { COLORS } from "styles/palette";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  padding: 0.8rem 1.2rem;
  width: 6.6rem;
  height: 3.6rem;
  border-radius: 3.2rem;
  background: rgba(0, 0, 0, 0.54);
  color: ${COLORS.WHITE};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2rem;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
