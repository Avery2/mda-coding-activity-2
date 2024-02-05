import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import React from 'react';

interface CarouselWrapperProps {
  images: string[];
}

const CarouselWrapper: React.FC<CarouselWrapperProps> = ({ images }) => {
  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url}/>
    </Carousel.Slide>
  ));

  return <Carousel withIndicators w={500} height={500}>{slides}</Carousel>;
};

export default CarouselWrapper;
