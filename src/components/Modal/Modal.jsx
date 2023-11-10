import Relationship from "components/Badges/Relationship";
import * as S from "./Modal.style";
import { Button } from "components/Button";

function Modal({ close, item, relationship, date }) {
  return (
    <>
      <S.ModalBackdrop onClick={close} />
      <S.ModalContainer>
        <S.ModalHeader>
          <S.ProfileWrapper>
            <S.ProfileImg src={item.profileImageURL}></S.ProfileImg>
            <S.ProfileInfo>
              <div>
                From. <S.Name>{item.sender}</S.Name>
              </div>
              <Relationship relationship={relationship} />
            </S.ProfileInfo>
          </S.ProfileWrapper>
          <S.ProfileDate>{date}</S.ProfileDate>
        </S.ModalHeader>
        <S.ModalContent>
          <S.ModalTextField font={item.font}>{item.content}</S.ModalTextField>
          <Button onClick={close} size="md">
            확인
          </Button>
        </S.ModalContent>
      </S.ModalContainer>
    </>
  );
}

export default Modal;
