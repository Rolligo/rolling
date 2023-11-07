import * as S from "./PaperListPage.style";
import useRequest from "hooks/useRequest";
import PaperCard from "components/PaperCard";

function PaperListPage() {
  const { data: recentPaper } = useRequest({
    url: "recipients/",
    method: "get",
  });

  const { data: popularPaper } = useRequest({
    url: "recipients/",
    method: "get",
    params: {
      sort: "like",
    },
  });

  return (
    <S.Container>
      <S.Section>
        <S.Title>인기 롤링 페이퍼 🔥</S.Title>
        <S.CardContainer>
          {popularPaper &&
            popularPaper?.results?.map((paper) => (
              <li key={paper?.id}>
                <PaperCard data={paper} />
              </li>
            ))}
        </S.CardContainer>
      </S.Section>
      <S.Section>
        <S.Title>최근에 만든 롤링 페이퍼⭐️</S.Title>
        <S.CardContainer>
          <PaperCard />
          <PaperCard />
          <PaperCard />
        </S.CardContainer>
      </S.Section>
    </S.Container>
  );
}

export default PaperListPage;
