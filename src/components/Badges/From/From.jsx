import * as S from "./From.style";

function From({ imgUrls, count }) {
  return (
    <S.Container>
      {imgUrls?.map((url, index) => (
        <S.ImgContainer key={index} index={index}>
          <S.Img src={url} />
        </S.ImgContainer>
      ))}
      <S.CountContainer index={imgUrls?.length}>
        +{Number(count) - imgUrls?.length}
      </S.CountContainer>
    </S.Container>
  );
}

export default From;
