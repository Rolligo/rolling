import styled from "styled-components";
import { onTablet, onPc, onTabletAndPc } from "styles/mediaQuery";
import { COLORS } from "styles/palette";

export const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  width: 100%;
  max-width: 120rem;
  gap: 1.6rem;

  ${onTablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${onPc} {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 2.8rem;
    column-gap: 2.4rem;
  }
`;
export const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 23rem;
  justify-content: center;
  align-items: center;
  border-radius: 1.6rem;
  background: ${COLORS.WHITE};
  box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.08);

  ${onTabletAndPc} {
    height: 28rem;
  }
`;

export const CardContainer = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 23rem;
  border-radius: 1.6rem;
  background: ${COLORS.WHITE};
  box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.08);
  padding: 2.8rem 2.4rem 2.4rem 2.4rem;

  ${onTablet} {
    height: 28.4rem;
  }

  ${onPc} {
    height: 28rem;
  }
`;

export const ScrollTarget = styled.div`
  position: absolute;
  bottom: 0;
  height: 26.8rem;

  ${onTabletAndPc} {
    height: 32.2rem;
  }
`;
