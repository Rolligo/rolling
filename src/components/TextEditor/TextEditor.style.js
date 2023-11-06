import styled from "styled-components";
import { onPc, onTablet } from "styles/mediaQuery";
import { COLORS } from "styles/palette";

export const TextEditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0rem 0rem 1.6rem 0.1rem;
  border-radius: 0.8rem;
  border: 0.1rem solid ${COLORS.GRAY_300};
  max-width: 71rem;
  ${onTablet} {
  }

  ${onPc} {
  }
`;

export const EditContainer = styled.div`
  background: ${COLORS.GRAY_200};
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
`;

export const TextContainer = styled.textarea`
  border: none;
  resize: none;
  min-height: 20rem;
  padding: 1.5rem 1.5rem;
  color: ${COLORS.GRAY_900};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
  letter-spacing: -0.16px;
`;
