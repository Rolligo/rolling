import * as S from "./PaperCard.style";
import Emoji from "components/Badges/Emoji";
import From from "components/Badges/From";

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
    recentMessages,
  } = data;

  const FromImgUrls = [
    recentMessages?.[0]?.profileImageURL,
    recentMessages?.[1]?.profileImageURL,
    recentMessages?.[2]?.profileImageURL,
  ];

  return (
    <S.Container
      $backgroundColor={BACKGROUND_COLOR?.[backgroundColor]}
      $backgroundImageUrl={backgroundImageUrl}
    >
      <S.TextContainer>
        <S.Title>{name}</S.Title>
        <From imgUrls={FromImgUrls} count={messageCount} />
        <S.Description>
          <S.Count>{messageCount}</S.Count>명이 작성했어요!
        </S.Description>
      </S.TextContainer>
      <S.Line />
      <Emoji.Container>
        {topReactions &&
          topReactions?.map((reaction) => (
            <Emoji
              key={reaction.id}
              emoji={reaction.emoji}
              count={reaction.count}
            />
          ))}
      </Emoji.Container>
    </S.Container>
  );
}

export default PaperCard;
