import styled, { css } from "styled-components";
import { COLORS } from "styles/palette";
import checkedIcon from "assets/images/icons/checked-icon.png";

export const Wrapper = styled.div`
  margin-top: 5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  width: 72rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export const ToInputWrapper = styled.div`
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
  display: inline-flex;
  align-items: flex-start;
  gap: 1.6rem;
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
