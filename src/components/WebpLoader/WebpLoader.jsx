import React from "react";
import * as S from "./WebpLoader.style";

const WebpLoader = ({ src, webpSrc, alt = "png image" }) => {
  return (
    <picture>
      {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
      <S.CoveredImg src={src} alt={alt} />
    </picture>
  );
};

import React from "react";

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
