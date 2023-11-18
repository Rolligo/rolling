import WebpLoader from "components/WebpLoader";
import React from "react";

const WebpImg = ({ src, webpSrc, lazyMode = false, alt }) => {
  return (
    <>
      {lazyMode ? (
        <WebpLoader.Lazy src={src} webpSrc={webpSrc} alt={alt} />
      ) : (
        <WebpLoader src={src} webpSrc={webpSrc} alt={alt} />
      )}
    </>
  );
};

export default WebpImg;
