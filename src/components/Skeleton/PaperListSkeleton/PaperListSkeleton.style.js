import styled, { keyframes } from "styled-components";
import { onTablet, onPc } from "styles/mediaQuery";
import { COLORS } from "styles/palette";

export const SkeletonContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  width: 100%;
  height: 24.8rem;
  padding: 0 2rem;

  ${onTablet} {
    height: 26rem;
  }

  ${onPc} {
    padding: 0 0.6rem;
    margin: 0 1.4rem;
    height: 26rem;
  }
`;

const Loading = keyframes`
  0% {
    transform: translateX(-10rem);
  }
  70%,
  100% {
    transform: translateX(27rem);
  }
`;

export const SkeletonCard = styled.div`
  overflow: hidden;
  position: relative;
  width: 20.8rem;
  height: 23.2rem;
  border-radius: 1.6rem;
  box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.08);
  background-color: ${COLORS.GRAY_200};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0rem;
    width: 10rem;
    height: 100%;
    background: linear-gradient(
      to right,
      ${COLORS.GRAY_200},
      ${COLORS.GRAY_300},
      ${COLORS.GRAY_200}
    );
    animation: ${Loading} 1.6s infinite linear;
  }

  ${onTablet} {
    width: 27.5rem;
    height: 26rem;
  }

  ${onPc} {
    width: 27.5rem;
    height: 26rem;
  }
`;
