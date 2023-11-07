import styled, { css } from "styled-components";
import { onTablet, onPc } from "styles/mediaQuery";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 7.4rem;
  padding-top: 4rem;
  max-width: 116rem;

  ${onPc} {
    margin: 0 auto;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  position: relative;
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
  overflow-y: visible;
  width: 100%;
  height: 24.8rem;
  padding: 0rem 2rem;

  ${onTablet} {
    height: 26rem;
  }

  ${onPc} {
    overflow: hidden;
    height: 26rem;
  }
`;

export const ButtonContainer = styled.div`
  position: fixed;
  right: 50%;
  bottom: 2.4rem;
  transform: translateX(50%);
  width: calc(100% - 4rem);

  ${onPc} {
    width: auto;
  }
`;

export const ArrowButtonContainer = styled.div`
  position: absolute;
  top: 48%;

  ${({ $left }) =>
    $left &&
    css`
      left: -1rem;
    `}

  ${({ $right }) =>
    $right &&
    css`
      right: -2.2rem;
    `}
`;
