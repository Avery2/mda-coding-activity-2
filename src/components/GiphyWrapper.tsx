import React, {useEffect, useState} from 'react';
import {GiphyFetch} from '@giphy/js-fetch-api';
import {Gif} from '@giphy/react-components';

interface GiphyWrapperProps {
  id: string;
  width: number;
}

const GiphyWrapper: React.FC<GiphyWrapperProps> = ({id, width}) => {
  const [gifData, setGifData] = useState<any>(null);

  useEffect(() => {
    const fetchGifData = async () => {
      const gf = new GiphyFetch('yp7P4qBDzPd4AQDYREcaEPR5cg2aeD5c');
      const {data} = await gf.gif(id);
      setGifData(data);
    };

    fetchGifData();
  }, [id]);

  return gifData ? <Gif gif={gifData} width={width}/> : null;
};

export default GiphyWrapper;
