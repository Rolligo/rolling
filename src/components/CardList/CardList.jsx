import RoundAddButton from "components/StyledButtons/RoundAddButton";
import * as S from "./CardList.style";
import Card from "components/CardList/Card";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import fetch from "apis/utils/fetch";

const LIMIT = 3;
let offset = 0;

function CardList({ isEditMode, id }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasNext, setHasNext] = useState(true);
  const target = useRef(null);

  const loadData = async (offset) => {
    try {
      if (!hasNext) return;
      setIsLoading(true);
      const { data } = await fetch({
        url: `/recipients/${id}/messages/`,
        params: {
          limit: LIMIT,
          offset: offset,
        },
      });
      const currentData = data?.results;
      setData((prevData) => [...prevData, ...currentData]);
      const next = data?.next;
      if (!next) setHasNext(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const cards = data;

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      await loadData(offset);
      offset += LIMIT;
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, { threshold: 0.1 });
    observer.observe(target.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <>
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
      <S.ScrollTarget ref={target}></S.ScrollTarget>
    </>
  );
}

export default CardList;
