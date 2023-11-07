import styled from "styled-components";
import { COLORS } from "styles/palette";
import { onPc, onTablet } from "styles/mediaQuery";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${COLORS.WHITE};
`;

export const Container = styled.div`
  width: 100%;
  padding: 1.2rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  white-space: nowrap;

  ${onTablet} {
    padding: 1.1rem 2.4rem;
  }

  ${onPc} {
    width: 120.7rem;
    padding: 1.1rem 0;
  }
`;

export const LogoImage = styled.img`
  width: 10.6rem;
  height: 4.2rem;
  display: flex;
  padding: 0.6rem 0;
  justify-content: center;
  align-items: center;
`;

export const BottomLine = styled.div`
  width: 100%;
  height: 0.1rem;
  flex-shrink: 0;
  background: #ededed;
`;
