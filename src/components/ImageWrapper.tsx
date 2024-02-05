import React from 'react';
import { Image } from '@mantine/core';

interface ImageWrapperProps {
  source: string;
  width: number;
}

const ImageWrapper: React.FC<ImageWrapperProps> = ({ source, width }) => {
  return (
    <div
      style={{
        width,
        margin: 'auto',
      }}
    >
      <Image radius="md" src={source} alt="Random unsplash image" />
    </div>
  );
};

export default ImageWrapper;
