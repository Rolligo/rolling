import * as S from "./CardList.style";
import Card from "components/CardList/Card";
import { Link } from "react-router-dom";
import { Button } from "components/StyledButtons";

function CardList({ items }) {
  const cards = items.recentMessages;

  return (
    <S.ListContainer>
      <S.ButtonContainer>
        <Link to={`/post/{items.id}/message`}>
          <Button.Add />
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
