import styled, { css } from "styled-components";
import { COLORS } from "styles/palette";
import { onPc, onTabletAndPc } from "styles/mediaQuery";

export const NavContainer = styled.div`
  display: none;

  ${onTabletAndPc} {
    display: contents;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  ${onTabletAndPc} {
    width: 72rem;
  }

  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  position: relative;
`;

export const ToInputWrapper = styled.div`
  margin-top: 5rem;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
`;

export const DescriptionWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
  margin-bottom: 2.5rem;
`;

export const ColorChipContainer = styled.div`
  display: grid;
  width: fit-content;
  grid-template-columns: repeat(2, 1fr);
  align-items: flex-start;
  gap: 1.6rem;

  ${onTabletAndPc} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Chip = styled.button`
  width: 16.8rem;
  height: 16.8rem;
  flex-shrink: 0;
  border-radius: 1.6rem;
  border: 1px solid rgba(0, 0, 0, 0.08);

  ${(props) =>
    props.image
      ? css`
          background-repeat: no-repeat;
          background-size: cover;
          background-image: url(${props.background});
        `
      : css`
          background: ${props.background};
        `}
`;

export const TitleText2 = styled.h2`
  color: ${COLORS.GRAY_900};
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.6rem; /* 150% */
  letter-spacing: -0.024rem;
`;

export const SubText = styled.h5`
  color: ${COLORS.GRAY_500};
  /* Font/16 Regular */
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.6rem; /* 162.5% */
  letter-spacing: -0.016rem;
`;

export const TitleText1 = styled(TitleText2)`
  line-height: 4.2rem;
`;

export const CheckedIcon = styled.img`
  width: 4.4rem;
  height: 4.4rem;
  visibility: ${({ visibility }) => (visibility ? "visible" : "hidden")};
`;

export const ButtonContainer = styled.div`
  padding: 2.4rem 0;
  position: absolute;
  bottom: 0;
  width: 100%;

  ${onPc} {
    position: relative;
  }
`;
