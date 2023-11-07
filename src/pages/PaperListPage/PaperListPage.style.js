import styled from "styled-components";
import { onTablet, onPc } from "styles/mediaQuery";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 7.4rem;
  padding-top: 4rem;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const Title = styled.h1`
  padding-left: 2rem;
  font-size: 2rem;
  font-weight: 600;
  line-height: 3rem;
`;

export const CardContainer = styled.ul`
  display: flex;
  gap: 1.2rem;
  overflow: scroll;
  width: 100%;
  height: 23.2rem;
  padding: 0 2rem;

  ${onTablet} {
    height: 26rem;
  }

  ${onPc} {
    height: 26rem;
  }
`;
