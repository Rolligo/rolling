import styled, { keyframes } from "styled-components";
import { onPc, onTablet } from "styles/mediaQuery";
import { FONT_STYLE } from "styles/fontStyle";
import { COLORS } from "styles/palette";

export const CreateMessagePageDiv = styled.main`
  padding: 0 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2.4rem;

  ${onTablet} {
    padding: 0 auto;
    padding-bottom: 2.4rem;
  }

  ${onPc} {
    padding-bottom: 2.4rem;
  }
`;

export const Section = styled.section`
  width: 100%;
  padding: 5rem 0 0 0;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;

  ${onTablet} {
    width: 70.6rem;
  }

  ${onPc} {
    width: 100%;
    max-width: 72rem;
  }
`;

export const H1 = styled.div`
  margin-bottom: 1.2rem;
  color: ${COLORS.GRAY_900};

  ${FONT_STYLE.BOLD_24}
  font-weight: 700;
`;

export const ImgDiv = styled.div`
  display: flex;
  width: 100%;
  height: 20rem;
  gap: 3.2rem;
`;

export const ChosenImgDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.4rem 0;
  width: 8rem;
  height: 8rem;
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  width: 100%;
`;

export const Div = styled.div`
  padding-top: 1.7rem;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const H2 = styled.h2`
  ${FONT_STYLE.REGULAR_16};
  color: ${COLORS.GRAY_500};
  padding-bottom: 1.7rem;
`;

export const DefaultImage = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 10rem;
`;

export const SingleImage = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 10rem;
  ${onTablet} {
    width: 5.6rem;
    height: 5.6rem;
  }

  ${onPc} {
    width: 5.6rem;
    height: 5.6rem;
  }
`;

export const SingleImageButton = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 10rem;
  ${onTablet} {
    width: 5.6rem;
    height: 5.6rem;
  }

  ${onPc} {
    width: 5.6rem;
    height: 5.6rem;
  }
`;

const Spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-720deg);
  }
`;

export const LoadingImg = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  animation: ${Spin} 2.5s linear infinite;
  filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(309deg)
    brightness(105%) contrast(102%);
`;
