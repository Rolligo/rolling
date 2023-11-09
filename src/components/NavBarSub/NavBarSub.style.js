import styled from "styled-components";
import { COLORS } from "styles/palette";
import { FONT_STYLE } from "styles/fontStyle";
import { onPc, onTablet } from "styles/mediaQuery";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  
  ${onTablet} {
    padding: 1.3rem 0; 
  }
  
  ${onPc} {

  }
`;

export const Container = styled.div`
  ${onTablet} {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2.4rem;
  }
`;

export const Header = styled.div`
  width: 100%;
  padding: 1.2rem 2rem;
`;
  
  export const ToContainer = styled.div`
  width: 100%;
  color: ${COLORS.GRAY_800};
  ${FONT_STYLE.BOLD_18};

  ${onTablet} {
    width: 22.7rem;
    color: ${COLORS.GRAY_800};
    ${FONT_STYLE.BOLD_28};
  }
`;

export const HeaderService = styled.div`
  padding: 0.8rem 2rem;

  ${onTablet} {
    gap: 0.8rem;
  }
`;

export const Container2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EmojiContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const EmojiWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const Button = styled.button`
  width: 3.6rem;
  height: 3.6rem;
  padding: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.span`
  display: flex;
  justify-content: center;
  align-item: center;
  gap: 1.5rem;

  ${onTablet} {
    gap: 1.3rem;
  }
`;

export const Border = styled.div`
  background-color: ${COLORS.GRAY_200};
  width: 1px;
  height: 2.8rem;
  margin: auto 0;
`;