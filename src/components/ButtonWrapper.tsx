import React from 'react';
import { Button } from '@mantine/core';

interface ButtonWrapperProps {
  text: string;
  url: string;
}

const ButtonWrapper: React.FC<ButtonWrapperProps> = ({ text, url }) => {
  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <Button onClick={handleClick}>{text}</Button>
  );
};

export default ButtonWrapper;
