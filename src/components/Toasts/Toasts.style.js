import styled from "styled-components";
import { onPc, onTablet } from "styles/mediaQuery";
import { COLORS } from "styles/palette";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 8.8rem;
  right: 50%;
  transform: translateX(50%);
  width: calc(100% - 4rem);
  height: 6.4rem;
  padding: 1.9rem 3rem;
  border-radius: 0.8rem;
  background: rgba(0, 0, 0, 0.8);

  ${onTablet} {
    bottom: 5rem;
    width: 52.4rem;
  }

  ${onPc} {
    bottom: 5rem;
    width: 52.4rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  color: ${COLORS.WHITE};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.6rem;
  letter-spacing: -0.016rem;
`;
