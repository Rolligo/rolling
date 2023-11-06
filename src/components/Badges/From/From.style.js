import styled, { css } from "styled-components";
import { COLORS } from "styles/palette";

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 8.5rem;
  height: 3rem;
`;

export const ImgContainer = styled.div`
  overflow: hidden;
  padding: 0.2rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${COLORS.WHITE};

  ${({ index }) => css`
    position: absolute;
    left: ${index * 1.7}rem;
  `}
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

export const CountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: ${({ index }) => index * 1.7}rem;
  width: 3.3rem;
  height: 3rem;
  border-radius: 3rem;
  background-color: ${COLORS.WHITE};
  color: ${COLORS.GRAY_500};
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.8rem;
  letter-spacing: -0.006rem;
`;
