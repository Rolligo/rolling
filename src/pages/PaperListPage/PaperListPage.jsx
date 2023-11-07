import * as S from "./PaperListPage.style";
import useRequest from "hooks/useRequest";
import PaperCard from "components/PaperCard";
import NavBar from "components/NavBar";
import PrimaryButton from "components/StyledButtons/PrimaryButton";

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

  const reversedPopularPaper = {
    ...popularPaper,
    results: popularPaper?.results?.reverse(),
  };

  return (
    <>
      <NavBar />
      <S.Container>
        <PaperSection
          title="인기 롤링 페이퍼 🔥"
          papers={reversedPopularPaper}
        />
        <PaperSection title="최근에 만든 롤링 페이퍼⭐️" papers={recentPaper} />
      </S.Container>
      <S.ButtonContainer>
        <PrimaryButton smallSize>나도 만들어보기</PrimaryButton>
      </S.ButtonContainer>
    </>
  );
}

function PaperSection({ title, papers }) {
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
