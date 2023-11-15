import styled from "styled-components";
import { FONT_STYLE } from "styles/fontStyle";
import { onPc, onTablet, onTabletAndPc } from "styles/mediaQuery";
import { COLORS } from "styles/palette";

export const Profile = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.4rem;
  padding-bottom: 1.5rem;
  border-bottom: 0.1rem solid ${COLORS.GRAY_200};
`;

export const ProfileImage = styled.img`
  display: flex;
  width: 5.6rem;
  height: 5.6rem;
  align-items: center;
  border-radius: 10rem;
  border: 0.1rem solid ${COLORS.GRAY_200};
  background: ${COLORS.WHITE};
`;

export const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.6rem;
`;

export const Sender = styled.p`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  ${FONT_STYLE.REGULAR_18};

  span {
    ${FONT_STYLE.BOLD_16};
  }

  ${onTabletAndPc} {
    ${FONT_STYLE.REGULAR_20};

    span {
      ${FONT_STYLE.BOLD_20};
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.6rem;
  gap: 1.6rem;
`;

export const Message = styled.p`
  display: block;
  height: 4.4rem;
  margin-bottom: 1.2rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: ${COLORS.GRAY_600};
  * {
    font-family: ${({ $font }) => $font};
  }
  ${FONT_STYLE.REGULAR_15};

  ${onTabletAndPc} {
    ${FONT_STYLE.REGULAR_18};
    -webkit-line-clamp: 3;
  }

  ${onTablet} {
    height: 8.4rem;
    margin-bottom: 2.6rem;
  }

  ${onPc} {
    height: 8.4rem;
    margin-bottom: 2.4rem;
  }
`;

export const Date = styled.p`
  color: ${COLORS.GRAY_400};
  ${FONT_STYLE.REGULAR_12};
`;

export const IconContainer = styled.button`
  position: absolute;
  top: 2.8rem;
  right: 2.4rem;
  width: 4rem;
  height: 4rem;
  display: inline-flex;
  padding: 0.8rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.6rem;
  border: 0.1rem solid ${COLORS.GRAY_300};
  background: ${({ disabled }) => (disabled ? COLORS.GRAY_300 : COLORS.WHITE)};

  &:hover,
  &:active {
    background-color: ${COLORS.GRAY_100};
  }

  &:focus {
    background-color: ${COLORS.WHITE};
    border-color: ${COLORS.GRAY_500};
  }

  img {
    filter: ${({ disabled }) => disabled && "brightness(1000%)"};
  }
`;
