import RoundAddButton from "components/StyledButtons/RoundAddButton";
import * as S from "./CardList.style";
import Card from "components/CardList/Card";
import { Link } from "react-router-dom";

function CardList({ items }) {
  const cards = items.recentMessages;

  return (
    <S.ListContainer>
      <S.ButtonContainer>
        <Link to={`/post/{items.id}/message`}>
          <RoundAddButton />
        </Link>
      </S.ButtonContainer>
      {cards &&
        cards.map((card) => {
          return (
            <S.CardContainer key={card.id}>
              <Card item={card} />
            </S.CardContainer>
          );
        })}
    </S.ListContainer>
  );
}

export default CardList;
