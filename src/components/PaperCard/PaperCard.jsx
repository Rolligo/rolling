import * as S from "./PaperCard.style";
import Emoji from "components/Badges/Emoji";
import From from "components/Badges/From";

const imgUrls = [
  "https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8",
  "https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8",
  "https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8",
];

function PaperCard() {
  return (
    <S.Container>
      <S.TextContainer>
        <S.Title>To. Sowon</S.Title>
        <From imgUrls={imgUrls} count="27" />
        <S.Description>
          <S.Count>30</S.Count>명이 작성했어요!
        </S.Description>
      </S.TextContainer>
      <S.Line />
      <Emoji.Container>
        <Emoji emoji="😊" count={12} />
        <Emoji emoji="👍" count={24} />
        <Emoji emoji="🎉" count={7} />
      </Emoji.Container>
    </S.Container>
  );
}

export default PaperCard;
