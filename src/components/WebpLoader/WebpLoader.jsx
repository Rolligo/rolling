import React from "react";
import * as S from "./WebpLoader.style";
import useLazyImageObserver from "./useLazyImageObserver";

const WebpLoader = ({ src, webpSrc, alt = "png image" }) => {
  return (
    <picture>
      {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
      <S.CoveredImg src={src} alt={alt} />
    </picture>
  );
};

const LazyModeWebpLoader = ({ src, webpSrc, alt = "png image" }) => {
  const { imgRef, imgSrc } = useLazyImageObserver({ src: webpSrc ?? src });
  return (
    <picture>
      {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
      <S.CoveredImg ref={imgRef} src={imgSrc} alt={alt} />
    </picture>
  );
};

WebpLoader.Lazy = LazyModeWebpLoader;

export default WebpLoader;
