import * as S from "./Emoji.style";

function Emoji({ emoji, count }) {
  return (
    <S.Wrapper>
      <span>{emoji}</span>
      <span>{count}</span>
    </S.Wrapper>
  );
}

const Container = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

Emoji.Container = Container;

export default Emoji;
