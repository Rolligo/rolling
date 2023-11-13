import * as S from "./EmojiList.style";
import Emoji from "components/Badges/Emoji";

function EmojiList({ reactions }) {
  return (
    <>
      <S.Container>
        {reactions?.map((emoji) => {
          return (
            <Emoji key={emoji?.id} emoji={emoji?.emoji} count={emoji?.count} />
          );
        })}
      </S.Container>
    </>
  );
}

export default EmojiList;
