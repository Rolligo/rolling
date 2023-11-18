import * as S from "./From.style";

function From({ imgUrls, count }) {
  const showMoreCount =
    Number(count) - imgUrls?.length > 99 ? 99 : Number(count) - imgUrls?.length;
  return (
    <S.Container $count={count}>
      {imgUrls?.map((url, index) => {
        if (!url) return;
        return (
          <S.ImgContainer key={index} $index={index}>
            <S.Img src={url} />
          </S.ImgContainer>
        );
      })}
      {showMoreCount > 0 && (
        <S.CountContainer $index={imgUrls?.length}>
          +{showMoreCount}
        </S.CountContainer>
      )}
    </S.Container>
  );
}

export default From;
