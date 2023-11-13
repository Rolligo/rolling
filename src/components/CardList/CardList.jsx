import * as S from "./CardList.style";
import Card from "components/CardList/Card";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Button } from "components/Button";
import useRequest from "hooks/useRequest";

const LIMIT = 3;

function CardList({ isEditMode, id }) {
  const [cards, setCards] = useState([]);
  const [hasNext, setHasNext] = useState(true);
  const [deleteId, setDeleteId] = useState(null);
  const [offset, setOffset] = useState(0);
  const target = useRef(null);

  const { isLoading, fetch: fetchLoad } = useRequest({
    skip: true,
    options: {
      url: `/recipients/${id}/messages/`,
      params: {
        limit: LIMIT,
        offset: offset,
      },
    },
  });

  const { fetch: fetchDelete } = useRequest({
    skip: true,
    options: {
      url: `/messages/${deleteId}/`,
      method: "DELETE",
    },
  });

  const loadData = async () => {
    if (!hasNext) return;
    const { data: cards, error } = await fetchLoad();
    if (error) {
      throw new Error("메시지 카드 불러오기 실패");
    }
    const currentCards = cards?.results;
    setCards((prevCards) => [...prevCards, ...currentCards]);
    setOffset((prevOffset) => prevOffset + LIMIT);
    if (!cards?.next) setHasNext(false);
  };

  const deleteCard = async () => {
    if (!deleteId) return;
    const { error } = await fetchDelete();
    if (error) {
      throw new Error("메시지 카드 삭제 실패");
    }
    setCards((prevCards) => prevCards.filter((card) => card.id !== +deleteId));
  };

  const getDeleteCardId = (e) => {
    e.stopPropagation();
    setDeleteId(e.currentTarget.id);
  };

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoading) {
      observer.unobserve(entry.target);
      await loadData();
      if (hasNext && target.current) {
        observer.observe(target.current);
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, { threshold: 0.1 });
    if (target.current) {
      observer.observe(target.current);
    }
    return () => observer.disconnect();
  }, [offset, target]);

  useEffect(() => {
    deleteCard();
  }, [deleteId]);

  return (
    <>
      <S.ListContainer>
        {!isEditMode && (
          <S.ButtonContainer>
            <Link to={`/post/${id}/message`}>
              <Button.Add />
            </Link>
          </S.ButtonContainer>
        )}
        {cards &&
          cards.map((card) => {
            return (
              <S.CardContainer key={card?.id}>
                <Card
                  item={card}
                  isEditMode={isEditMode}
                  getDeleteCardId={getDeleteCardId}
                />
              </S.CardContainer>
            );
          })}
      </S.ListContainer>
      {hasNext && !isLoading && <S.ScrollTarget ref={target}></S.ScrollTarget>}
    </>
  );
}

export default CardList;
