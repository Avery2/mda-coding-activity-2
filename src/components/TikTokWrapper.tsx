import React from 'react';
import { TikTokEmbed } from 'react-social-media-embed';

interface TikTokWrapperProps {
  url: string;
}

const TikTokWrapper: React.FC<TikTokWrapperProps> = ({ url }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <TikTokEmbed url={url} width={325} />
    </div>
  );
};

export default TikTokWrapper;
