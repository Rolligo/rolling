import styled from "styled-components";
import { FONT_STYLE } from "styles/fontStyle";
import { onPc, onTablet } from "styles/mediaQuery";
import { COLORS } from "styles/palette";

export const Container = styled.div`
  width: 20.8rem;
  height: 23.2rem;
  padding: 3rem 2.2rem 2rem 2.4rem;
  border-radius: 1.6rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  background-color: ${({ $backgroundColor }) => COLORS[$backgroundColor]};
  box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.08);

  ${onTablet} {
    width: 27.5rem;
    height: 26rem;
  }

  ${onPc} {
    width: 27.5rem;
    height: 26rem;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const Title = styled.p`
  ${COLORS.GRAY_900};
  ${FONT_STYLE.BOLD_18};

  ${onTablet} {
    ${FONT_STYLE.BOLD_24};
  }

  ${onPc} {
    ${FONT_STYLE.BOLD_24};
  }
`;

export const Description = styled.p`
  ${COLORS.GRAY_700};
  ${FONT_STYLE.REGULAR_14};

  ${onTablet} {
    ${FONT_STYLE.REGULAR_16};
  }

  ${onPc} {
    ${FONT_STYLE.REGULAR_16};
  }
`;

export const Count = styled.span`
  ${FONT_STYLE.BOLD_14};

  ${onTablet} {
    ${FONT_STYLE.BOLD_16};
  }

  ${onPc} {
    ${FONT_STYLE.BOLD_16};
  }
`;

export const Line = styled.div`
  height: 1px;
  margin-top: 3.3rem;
  margin-bottom: 1.6rem;
  background: rgba(0, 0, 0, 0.12);

  ${onTablet} {
    margin-top: 4.3rem;
  }

  ${onPc} {
    margin-top: 4.3rem;
  }
`;
