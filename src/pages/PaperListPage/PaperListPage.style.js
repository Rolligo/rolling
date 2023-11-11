import styled, { css } from "styled-components";
import { onTablet, onPc } from "styles/mediaQuery";
import { zIndexStyle } from "styles/zIndexStyle";
import { Button } from "components/Button";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 7.4rem;
  padding-top: 4rem;
  padding-bottom: 10rem;
  max-width: 114.5rem;

  ${onTablet} {
    gap: 5rem;
    padding-bottom: 10rem;
  }

  ${onPc} {
    gap: 5rem;
    padding-bottom: 0;
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

export const CardContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  overflow: scroll;
  width: 100%;
  height: 24.8rem;
  padding: 0 2rem;

  ${onTablet} {
    height: 26rem;
  }

  ${onPc} {
    overflow: hidden;
    padding: 0 0.6rem;
    margin: 0 1.4rem;
    height: 26rem;
  }
`;

export const ButtonContainer = styled.div`
  position: fixed;
  right: 50%;
  bottom: 2.4rem;
  z-index: ${zIndexStyle.floating};
  transform: translateX(50%);
  width: calc(100% - 4rem);

  ${onPc} {
    position: static;
    transform: translateX(0);
    width: 28rem;
    margin: 6.4rem auto;
  }
`;

export const StyledButton = styled(Button)`
  width: 100%;

  ${onTablet} {
    width: 100%;
  }

  ${onPc} {
    width: unset;
  }
`;

export const ArrowButtonContainer = styled.div`
  display: none;
  position: absolute;
  top: 48%;

  ${({ $left }) =>
    $left &&
    css`
      left: -0.7rem;
    `}

  ${({ $right }) =>
    $right &&
    css`
      right: -3.7rem;
    `}

  ${onPc} {
    display: block;
  }
`;
