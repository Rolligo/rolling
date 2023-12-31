import styled from "styled-components";
import { COLORS } from "styles/palette";
import { FONT_STYLE } from "styles/fontStyle";
import { Button } from "components/Button";
import { onTabletAndPc } from "styles/mediaQuery";

export const ModalBackdrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  z-index: 10;
`;

export const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  background-color: ${COLORS.WHITE};
  border-radius: 1.6rem;
  box-shadow: 0rem 0.2rem 1.2rem 0rem rgba(0, 0, 0, 0.08);
  min-width: 27rem;
  padding: 2rem;

  ${onTabletAndPc} {
    width: 60rem;
    padding: 4rem;
  }
`;

export const ModalHeader = styled.div`
  width: 100%;
  padding-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.1rem solid ${COLORS.GRAY_200};
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const ProfileImg = styled.img`
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 50%;
`;

export const ProfileInfo = styled.div`
  color: ${COLORS.BLACK};
  font-size: 2rem;
  font-weight: 400;
  line-height: 120%;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const Sender = styled.div`
  max-width: 13rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${FONT_STYLE.REGULAR_18};

  ${onTabletAndPc} {
    max-width: 36rem;
    ${FONT_STYLE.REGULAR_20};
  }
`;

export const Name = styled.span`
  ${FONT_STYLE.BOLD_16};

  ${onTabletAndPc} {
    ${FONT_STYLE.BOLD_20};
  }
`;

export const ProfileDate = styled.div`
  display: none;
  color: ${COLORS.GRAY_400};
  ${FONT_STYLE.REGULAR_14};

  ${onTabletAndPc} {
    display: block;
  }
`;

export const ModalContent = styled.div`
  margin-top: 1.6rem;
  display: flex;
  flex-direction: column;
`;

export const ModalTextField = styled.div`
  width: 100%;
  height: 24rem;
  color: #5a5a5a;
  * {
    font-family: ${({ $font }) => $font};
  }
  ${FONT_STYLE.REGULAR_15};
  ${onTabletAndPc} {
    ${FONT_STYLE.REGULAR_18};
  }

  overflow: auto;
  &::-webkit-scrollbar {
    width: 0.4rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 0.4rem;
    background: ${COLORS.GRAY_300};
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  width: 1.2rem;
  margin-top: 1.6rem;
`;
