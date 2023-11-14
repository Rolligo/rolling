import * as S from "./PaperCard.style";
import Emoji from "components/Badges/Emoji";
import From from "components/Badges/From";
import PatternPurple from "assets/images/pattern_purple.svg";
import PatternBeige from "assets/images/pattern_beige.svg";
import PatternBlue from "assets/images/pattern_blue.svg";
import PatternGreen from "assets/images/pattern_green.svg";

const BACKGROUND = {
  purple: { color: "PURPLE_200", pattern: PatternPurple },
  beige: { color: "ORANGE_200", pattern: PatternBeige },
  blue: { color: "BLUE_200", pattern: PatternBlue },
  green: { color: "GREEN_200", pattern: PatternGreen },
};

function PaperCard({ data = {}, slideIndex = 0 }) {
  const {
    name,
    backgroundColor,
    backgroundImageURL,
    messageCount,
    topReactions,
    recentMessages,
  } = data;

  const fromImgUrls = [
    recentMessages?.[0]?.profileImageURL,
    recentMessages?.[1]?.profileImageURL,
    recentMessages?.[2]?.profileImageURL,
  ];

  const hasBackgroundImage = Boolean(backgroundImageURL);

  return (
    <S.Container
      $slideIndex={slideIndex}
      $backgroundColor={BACKGROUND?.[backgroundColor]?.color}
      $backgroundImageURL={backgroundImageURL}
    >
      <S.Wrapper $hasBackgroundImage={hasBackgroundImage}>
        <S.TextContainer>
          <S.Title $hasBackgroundImage={hasBackgroundImage}>{name}</S.Title>
          <From imgUrls={fromImgUrls} count={messageCount} />
          <S.Description $hasBackgroundImage={hasBackgroundImage}>
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
      </S.Wrapper>
      {!backgroundImageURL && (
        <S.Pattern src={BACKGROUND?.[backgroundColor]?.pattern} />
      )}
    </S.Container>
  );
}

export default PaperCard;
