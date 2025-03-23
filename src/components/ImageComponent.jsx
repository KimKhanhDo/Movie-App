import { useEffect, useState } from "react";

function ImageComponent({ src, alt, width, height, className }) {
  const [currentSrc, setCurrentSrc] = useState(
    `https://placehold.co/${width}x${height}?text=Loading`,
  );

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setCurrentSrc(src);
    };

    return () => {
      img.onload = null;
    };
  }, [src]);

  return (
    <img
      className={currentSrc === src ? className : `${className} blur-sm`}
      src={currentSrc}
      alt={alt}
      width={width}
      height={height}
    />
  );
}
export default ImageComponent;
