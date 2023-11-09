import styled from "styled-components";
import { COLORS } from "styles/palette";
import { FONT_STYLE } from "styles/fontStyle";
import { onPc, onTablet } from "styles/mediaQuery";

export const Wrapper = styled.div`
  // width: 100%;
  // display: flex;
  
  // ${onTablet} {
  //   // padding: 1.3rem 0; 
  // }
  
  ${onPc} {
    border: 1px solid red;
    width: 100%;
    // padding: 1.3rem 36rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  }
`;

export const Container = styled.div`
  white-space: nowrap;

  ${onTablet} {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2.4rem;
  }
  ${onPc} {
    border: 1px solid #000;
    min-width: 120rem;
    display: flex;
    justify-content: space-between;
    margin: 1.3rem 0;
`;

export const Header = styled.div`
  border: 1px solid #000;
  width: 100%;
  padding: 1.2rem 2rem;

  ${onTablet} {
    padding: 0;
    width: 22.7rem;
  }

  ${onPc} {
    width: 22.7rem;
  }
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

  ${onPc} {
    width: 100%;
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

export const BadgeContainer = styled.div`
  display: none;
  
  ${onTablet} {
    display: none;
  }

  ${onPc} {
    display: block;
    display: flex;
    border: 1px solid #000;
    align-items: center;
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  gap: 1.1rem;
`;

export const Group = styled.div`
  border: 1px solid #000;
  width: 7.6rem;
  height: 2.8rem;
`;
export const Count = styled.div`
  color: var(--gray-900, #181818);
  font-size: 18px;
  font-weight: 700;
  line-height: 150% 
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
  width: 0.1rem;
  height: 2.8rem;
  margin: auto 2.8rem;
`;
export const ButtonBorder = styled(Border)`
  margin: auto 1.3rem;
`;

