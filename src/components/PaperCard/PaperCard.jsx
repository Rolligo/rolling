import * as S from "./PaperCard.style";
import Emoji from "components/Badges/Emoji";
import From from "components/Badges/From";

const imgUrls = [
  "https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8",
  "https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8",
  "https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8",
];

const BACKGROUND_COLOR = {
  purple: "PURPLE_200",
  beige: "ORANGE_200",
  blue: "BLUE_200",
  green: "GREEN_200",
};

function PaperCard({ data = {} }) {
  const {
    name,
    backgroundColor,
    backgroundImageUrl,
    messageCount,
    topReactions,
  } = data;

  return (
    <S.Container
      $backgroundColor={BACKGROUND_COLOR?.[backgroundColor]}
      $backgroundImageUrl={backgroundImageUrl}
    >
      <S.TextContainer>
        <S.Title>{name}</S.Title>
        <From imgUrls={imgUrls} count={messageCount} />
        <S.Description>
          <S.Count>{messageCount}</S.Count>명이 작성했어요!
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
