import Relationship from "components/Badges/Relationship";
import * as S from "./Card.style";
import deleteIcon from "assets/images/icons/delete-icon.svg";
import { RELATIONSHIP } from "utils/constants";
import formatDate from "utils/formatDate";
import { useEffect } from "react";

function Card({ item, isEditMode }) {
  const relationship = RELATIONSHIP[item.relationship];
  const date = formatDate(item.createdAt);

  useEffect(() => {
    console.log(item);
  });

  return (
    <>
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
        <S.IconContainer>
          <img src={deleteIcon} alt="삭제 버튼" />
        </S.IconContainer>
      )}
      <S.Content>
        <S.Message font={item.font}>{item.content}</S.Message>
        <S.Date>{date}</S.Date>
      </S.Content>
    </>
  );
}

export default Card;
