import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';

interface InstagramWrapperProps {
  url: string;
}

const InstagramWrapper: React.FC<InstagramWrapperProps> = ({ url }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <InstagramEmbed url={url} width={328} />
    </div>
  );
};

export default InstagramWrapper;
