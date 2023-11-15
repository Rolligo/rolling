import Relationship from "components/Badges/Relationship";
import * as S from "./Card.style";
import deleteIcon from "assets/images/icons/delete-icon.svg";
import { RELATIONSHIP } from "utils/constants";
import formatDate from "utils/formatDate";
import { useState } from "react";
import Modal from "components/Modal";
import DOMPurify from "dompurify";

function Card({ item, isEditMode, getDeleteCardId }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const relationship = RELATIONSHIP[item.relationship];
  const date = formatDate(item.createdAt);
  const content = {
    __html: DOMPurify.sanitize(item.content),
  };

  const handleClickCard = () => {
    if (window.innerWidth > 768) {
      setModalIsOpen(true);
    }
  };

  const handleClickBackdropOrButton = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div onClick={handleClickCard}>
        <S.Profile>
          <S.ProfileImage src={item.profileImageURL} alt="프로필 이미지" />
          <S.ProfileText>
            <S.Sender>
              From.<span>{item.sender}</span>
            </S.Sender>
            <Relationship relationship={relationship} />
          </S.ProfileText>
        </S.Profile>
        {isEditMode && (
          <S.IconContainer id={item.id} onClick={getDeleteCardId}>
            <img src={deleteIcon} alt="카드 삭제 버튼" />
          </S.IconContainer>
        )}
        <S.Content>
          <S.Message $font={item.font} dangerouslySetInnerHTML={content} />
          <S.Date>{date}</S.Date>
        </S.Content>
      </div>
      {modalIsOpen && (
        <Modal
          close={handleClickBackdropOrButton}
          item={item}
          relationship={relationship}
          content={content}
          date={date}
        />
      )}
    </>
  );
}

export default Card;
