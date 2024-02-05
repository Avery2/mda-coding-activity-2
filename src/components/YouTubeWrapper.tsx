import React from 'react';
import { YouTubeEmbed } from 'react-social-media-embed';

interface YouTubeWrapperProps {
  url: string;
}

const YouTubeWrapper: React.FC<YouTubeWrapperProps> = ({ url }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <YouTubeEmbed
        height={220}
        placeholderImageUrl="https://i.ytimg.com/vi/HpVOs5imUN0/maxresdefault.jpg?t=1706730115190"
        url={url}
        width={325}
      />
    </div>
  );
};

export default YouTubeWrapper;
