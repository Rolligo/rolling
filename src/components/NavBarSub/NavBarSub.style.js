import styled from "styled-components";
import { COLORS } from "styles/palette";
import { FONT_STYLE } from "styles/fontStyle";
import { onPc, onTablet, onTabletAndPc } from "styles/mediaQuery";

export const Container = styled.div`
  padding-top: 1.3rem;
  padding-bottom: 1.3rem;
  background-color: ${COLORS.WHITE};
  width: 100%;
  white-space: nowrap;

  ${onTablet} {
    padding: 1.3rem 0;
  }

  ${onPc} {
    display: flex;
    justify-content: center;
  }
`;

export const Wrapper = styled.div`
  ${onTablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2.4rem;
  }

  ${onPc} {
    width: 120rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Header = styled.div`
  padding: 1.2rem 2rem;
  border-bottom: 1px solid ${COLORS.GRAY_200};

  ${onTablet} {
    padding: 0;
    border: none;
  }

  ${onPc} {
    padding: 0;
    border: none;
  }
`;

export const ToContainer = styled.div`
  color: ${COLORS.GRAY_800};
  ${FONT_STYLE.BOLD_18};

  ${onTablet} {
    ${FONT_STYLE.BOLD_28};
  }
  ${onPc} {
    ${FONT_STYLE.BOLD_28};
  }
`;

export const HeaderService = styled.div`
  padding: 0.8rem 2rem;
  display: flex;
  justify-content: space-between;

  ${onTablet} {
    padding: 0;
  }
  ${onPc} {
    padding: 0;
  }
`;

export const ProfileContainer = styled.div`
  display: none;

  ${onTablet} {
    display: none;
  }

  ${onPc} {
    display: block;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2.8rem;
    margin-right: 2.8rem;
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  gap: 1.1rem;
`;
export const ProfileGroup = styled.div`
  display: flex;
`;
export const Profile = styled.div`
  border: 1px solid #000;
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
`;
export const ProfileText = styled.div`
  color: ${COLORS.GRAY_900};
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 150%;
  white-space: nowrap;
`;
export const Count = styled(ProfileText)`
  display: inline-block;
  font-weight: 700;
`;

export const EmojiContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;

  ${onPc} {
    margin-right: 0.8rem;
  }
`;

export const EmojiWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const EmojiButton = styled.button`
  width: 3.6rem;
  height: 3.6rem;
  padding: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 1.5rem;

  ${onTablet} {
    gap: 1.3rem;
  }
  ${onPc} {
    gap: 1.3rem;
  }
`;

export const ButtonText = styled.p`
  display: none;

  ${onTabletAndPc} {
    display: block;
  }
`;

export const Border = styled.div`
  background-color: ${COLORS.GRAY_200};
  width: 0.1rem;
  height: 2.8rem;
  margin: auto 0;
`;
