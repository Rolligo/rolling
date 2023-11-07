import PaperCard from "components/PaperCard";
import * as S from "./PaperListPage.style";

function PaperListPage() {
  return (
    <S.Container>
      <S.Section>
        <S.Title>인기 롤링 페이퍼 🔥</S.Title>
        <S.CardContainer>
          <PaperCard />
          <PaperCard />
          <PaperCard />
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
