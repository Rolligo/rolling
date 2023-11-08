import RoundAddButton from "components/StyledButtons/RoundAddButton";
import * as S from "./CardList.style";
import Card from "components/CardList/Card";
import { Link } from "react-router-dom";
import useRequest from "hooks/useRequest";

function CardList({ isEditMode, id }) {
  const { data } = useRequest({
    url: `https://rolling-api.vercel.app/1-4/recipients/${id}/messages/`,
  });

  const cards = data?.results;

  return (
    <S.ListContainer>
      {!isEditMode && (
        <S.ButtonContainer>
          <Link to={`/post/${id}/message`}>
            <RoundAddButton />
          </Link>
        </S.ButtonContainer>
      )}
      {cards &&
        cards.map((card) => {
          return (
            <S.CardContainer key={card?.id}>
              <Card item={card} isEditMode={isEditMode} />
            </S.CardContainer>
          );
        })}
    </S.ListContainer>
  );
}

export default CardList;
