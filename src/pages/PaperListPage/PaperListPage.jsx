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
      <PaperSection title="인기 롤링 페이퍼 🔥" papers={popularPaper} />
      <PaperSection title="최근에 만든 롤링 페이퍼⭐️" papers={recentPaper} />
    </S.Container>
  );
}

function PaperSection({ title, papers }) {
  papers?.results?.reverse();
  return (
    <S.Section>
      <S.Title>{title}</S.Title>
      <S.CardContainer>
        {papers &&
          papers?.results?.map((paper) => (
            <li key={paper?.id}>
              <PaperCard data={paper} />
            </li>
          ))}
      </S.CardContainer>
    </S.Section>
  );
}

export default PaperListPage;
