"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const ProductSlider1 = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/images/product-slider/canva.jpg",
    "/images/product-slider/capcut.jpg",
    "/images/product-slider/chatgpt.jpg",
    "/images/product-slider/spotify.jpg",
    "/images/product-slider/tradingview.jpg",
    "/images/product-slider/midjourney.jpg",
    "/images/product-slider/duolingo.jpg",
  ];

  // فلش سمت راست
  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  // فلش سمت چپ
  const previousImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div className="relative mx-auto w-full max-w-6xl">
      {/* عکس */}
      <Link href="#">
        <Image
          src={images[currentImage]}
          alt="slide"
          width={1200}
          height={500}
          className="h-auto w-full"
        />
      </Link>

      {/* فلش راست */}
      <button onClick={nextImage} className="absolute right-4 top-1/2 cursor-pointer">
        <Image
          src="/images/arrow-left-white.svg"
          width={18}
          height={18}
          alt=""
        ></Image>
      </button>

      {/* فلش چپ */}
      <button
        onClick={previousImage}
        className="absolute left-4 top-1/2 cursor-pointer"
      >
        <Image
          src="/images/arrow-left-white.svg"
          width={18}
          height={18}
          alt=""
        ></Image>
      </button>
    </div>
  );
};

export default ProductSlider1;
