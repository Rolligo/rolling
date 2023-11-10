import Relationship from "components/Badges/Relationship";
import * as S from "./Modal.style";
import { useEffect } from "react";

function Modal({ close, item, relationship, content, date }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

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
          <S.ModalTextField
            font={item.font}
            dangerouslySetInnerHTML={content}
          ></S.ModalTextField>
          <S.ButtonContainer>
            <S.StyledButton onClick={close} size="md">
              확인
            </S.StyledButton>
          </S.ButtonContainer>
        </S.ModalContent>
      </S.ModalContainer>
    </>
  );
}

export default Modal;
