import { useEffect, useRef, useState } from "react";

function useLazyImageObserver({ src }) {
  const [imgSrc, setImgSrc] = useState("");
  const imgRef = useRef(null);

  useEffect(() => {
    let observer;

    if (imgRef && !imgSrc) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setImgSrc(src);
            observer.unobserve(imgRef.current);
          }
        },
        { threshold: 0.25 }
      );

      observer.observe(imgRef.current);
    }

    return () => observer && observer.disconnect();
  }, [imgRef, imgSrc, src]);

  return { imgRef, imgSrc };
}

export default useLazyImageObserver;
