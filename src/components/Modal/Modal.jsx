import * as S from "./Modal.style";
import PrimaryButton from "components/StyledButtons/PrimaryButton";

function Modal({ setOpenModal, name, badge, date }) {

  const handleModalClose = () => {
    setOpenModal(false);
  }

  return (
    <>
      <S.ModalBackdrop onClick={handleModalClose}/>
      <S.ModalContainer>
        <S.ModalHeader>
          <S.ProfileWrapper>
            <S.ProfileImg></S.ProfileImg>
            <S.ProfileInfo>
              <div>From. <S.Name>{name}</S.Name></div>
              <div>{badge}</div>
            </S.ProfileInfo>
          </S.ProfileWrapper>
          <S.ProfileDate>{date}</S.ProfileDate>
        </S.ModalHeader>
        <S.ModalContent>
          <S.ModalTextField>
            코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요! 코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!
            코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요! 코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!
          </S.ModalTextField>
          <PrimaryButton onClick={handleModalClose} width="12rem" margin="4rem auto 1rem" smallSize >확인</PrimaryButton>
        </S.ModalContent>
      </S.ModalContainer>
    </>
  );
};

export default Modal;