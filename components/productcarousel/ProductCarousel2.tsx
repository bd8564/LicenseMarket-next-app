"use client";

import ProductCards2 from "@/components/products/ProductCards2";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProductCarousel2 = () => {
  return (
    <Carousel className="w-full overflow-hidden mt-12">

      <CarouselContent>

        <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/4">
          <ProductCards2
            src="/images/productslider2/grammarly1.jpg"
            title="محصول اول"
            price="250,000 تومان"
          />
        </CarouselItem>

        <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/4">
          <ProductCards2
            src="/images/productslider2/udemy1.jpg"
            title="محصول دوم"
            price="300,000 تومان"
          />
        </CarouselItem>

        <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/4">
          <ProductCards2
            src="/images/productslider2/Duolingo1.jpg"
            title="محصول سوم"
            price="180,000 تومان"
          />
        </CarouselItem>

        <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/4">
          <ProductCards2
            src="/images/productslider2/gamma1.jpg"
            title="محصول چهارم"
            price="450,000 تومان"
          />
        </CarouselItem>

        <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/4">
          <ProductCards2
            src="/images/productslider2/yousician1.jpg"
            title="محصول پنجم"
            price="250,000 تومان"
          />
        </CarouselItem>

        <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/4">
          <ProductCards2
            src="/images/productslider2/coursera1.jpg"
            title="محصول ششم"
            price="250,000 تومان"
          />
        </CarouselItem>
        <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/4">
          <ProductCards2
            src="/images/productslider2/lynda1.jpg"
            title="محصول هفتم"
            price="250,000 تومان"
          />
        </CarouselItem>
        <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/4">
          <ProductCards2
            src="/images/productslider2/blinkist1.jpg"
            title="محصول هشتم"
            price="250,000 تومان"
          />
        </CarouselItem>
        <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/4">
          <ProductCards2
            src="/images/productslider2/datacamp1.jpg"
            title="محصول نهم"
            price="250,000 تومان"
          />
        </CarouselItem>
        <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/4">
          <ProductCards2
            src="/images/productslider2/udemy1.jpg"
            title="محصول دهم"
            price="250,000 تومان"
          />
        </CarouselItem>

      </CarouselContent>

      <CarouselPrevious className="left-3" />
      <CarouselNext className="right-3" />

    </Carousel>
  );
};

export default ProductCarousel2;