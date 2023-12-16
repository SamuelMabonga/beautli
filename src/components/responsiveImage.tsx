"use client"


import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

function isValidUrl(url: string) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

export default function ResponsiveImage({
  alt,
  src = "",
  aspectRatio = "3:4",
  gravity = "auto",
  layout = "fill",
  objectFit = "cover",
  setLoading = () => {},
}: any) {
  const divRef = useRef<HTMLDivElement>(null);

  const [width, setWidth] = React.useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (divRef.current) {
        const divWidth = divRef.current.offsetWidth;
        const divHeight = divRef.current.offsetHeight;

        setWidth(divWidth);
        // console.log("Div dimensions:", divWidth, divHeight);
      }
    };

    // Add event listener to track resize
    window.addEventListener("resize", handleResize);

    // Initial call to get dimensions
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // const [loading, setLoading]: any = useState(true)


  let splitUrl = src?.split("/upload");
  let newUrl = splitUrl?.[0] + `/upload/ar_${aspectRatio},c_fill,g_${gravity},w_${2000}` + splitUrl?.[1];

  const isSrcValidUrl = isValidUrl(src);

  return (
    <div ref={divRef} className="h-fit overflow-hidden rounded relative">
      <Image
        src={newUrl}
        alt={alt}
        width={0}
        height={0}
        layout={layout}
        objectFit={objectFit}
        onLoad={() => setLoading((prev: Boolean) => !prev)}
        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
      />
    </div>
    )

}