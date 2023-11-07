import styled from "styled-components";
import { COLORS } from "styles/palette";

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
  width: 60rem;
  height: 47.6rem;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  background-color: ${COLORS.WHITE};
  border-radius: 1.6rem;
  box-shadow: 0rem 0.2rem 1.2rem 0rem rgba(0, 0, 0, 0.08);
  padding: 4rem;
`;

export const ModalHeader = styled.div`
  width: 100%;
  height: 11.6rem;  
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${COLORS.GRAY_200};
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const ProfileImg = styled.div`
  border: 1px solid #000; 
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 50%;
`;

export const ProfileInfo = styled.div`
  color: ${COLORS.BLACK};
  font-family: Pretendard;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
`;

export const Name = styled.span`
  color: ${COLORS.BLACK};
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
`;

export const ProfileDate = styled.div`
  color: ${COLORS.GRAY_400};

  /* Font/14 Regular */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 142.857%;
  letter-spacing: -0.07px;
`;

export const ModalContent = styled.div`
  margin-top: 1.6rem;
  display: flex;
  flex-direction: column;
`;

export const ModalTextField = styled.div`
  width: 100%;
  height: 24rem;
  color: #5A5A5A;

  /* Font/18 Regular */
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 155.556%;
  letter-spacing: -0.18px;

  overflow: auto;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: ${COLORS.GRAY_300};
  }
`;
