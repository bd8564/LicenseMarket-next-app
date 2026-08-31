"use client";

import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const ProductCarousel1 = () => {
  return (
    <Carousel className="w-[90%] mx-auto mt-6">
      <CarouselContent>
        {/* عکس اول */}
        <CarouselItem className="basis-full">
          <Image
            src="/images/productslider1/spotify.jpg"
            alt="SLIDE"
            width={1200}
            height={600}
            className="w-full h-auto object-contain rounded-lg"
          />
        </CarouselItem>
        {/* عکس دوم */}
        <CarouselItem className="basis-full">
          <Image
            src="/images/productslider1/tradingview.jpg"
            alt="SLIDE"
            width={1200}
            height={600}
            className="w-full h-auto object-contain rounded-lg"
          />
        </CarouselItem>
        {/* عکس سوم */}
        <CarouselItem className="basis-full">
          <Image
            src="/images/productslider1/duolingo.jpg"
            alt="SLIDE"
            width={1200}
            height={600}
            className="w-full h-auto object-contain rounded-lg"
          />
        </CarouselItem>
        {/* عکس چهارم */}
        <CarouselItem className="basis-full">
          <Image
            src="/images/productslider1/capcut.jpg"
            alt="SLIDE"
            width={1200}
            height={600}
            className="w-full h-auto object-contain rounded-lg"
          />
        </CarouselItem>
        {/* عکس پنجم */}
        <CarouselItem className="basis-full">
          <Image
            src="/images/productslider1/midjourney.jpg"
            alt="SLIDE"
            width={1200}
            height={600}
            className="w-full h-auto object-contain rounded-lg"
          />
        </CarouselItem>
        {/* عکس ششم */}
        <CarouselItem className="basis-full">
          <Image
            src="/images/productslider1/chatgpt.jpg"
            alt="SLIDE"
            width={1200}
            height={600}
            className="w-full h-auto object-contain rounded-lg"
          />
        </CarouselItem>
        {/* عکس هفتم */}
        <CarouselItem className="basis-full">
          <Image
            src="/images/productslider1/canva.jpg"
            alt="SLIDE"
            width={1200}
            height={600}
            className="w-full h-auto object-contain rounded-lg"
          />
        </CarouselItem>
        
      </CarouselContent>

      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  );
};

export default ProductCarousel1;
