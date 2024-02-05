import React from 'react';
import {Group, Stack, Title} from '@mantine/core';
import GiphyWrapper from '../components/GiphyWrapper';
import ImageWrapper from '../components/ImageWrapper';
import CardWrapper from '../components/CardWrapper';
import InstagramWrapper from '../components/InstagramWrapper';
import TikTokWrapper from '../components/TikTokWrapper';
import YouTubeWrapper from '../components/YouTubeWrapper';
import ButtonWrapper from '../components/ButtonWrapper';
import AccordianWrapper from '../components/AccordianWrapper';
import CalenderWrapper from '../components/CalenderWrapper';
import CarouselWrapper from '../components/CarouselWrapper';

interface Tab1Props {
  name: string;
}

const Tab1: React.FC<Tab1Props> = ({name}) => {
  const data = [
    {
      value: '🍎 Soccer',
      description:
        'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
    },
    {
      value: '🍌 Basketball',
      description:
        'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',
    },
    {
      value: '🥦 Football',
      description:
        'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',
    },
  ];

  const testEvents = [
    {
      date: '01-01-2024',
      event: 'event1',
      description: 'something'
    },
    {
      date: '01-02-2024',
      event: 'event2',
      description: 'something'
    },
    {
      date: '02-01-2024',
      event: 'feb event',
      description: 'something'
    },
  ]

  return (
    <Stack align="center">
      <Title>{name}</Title>
      <ButtonWrapper text="Visit our school website!" url="http://www.mdasf.org/"/>
      <CalenderWrapper events={testEvents}/>
      <AccordianWrapper data={data} width={1000}/>
      <Title>Enjoy these animals 🦒🐕🦘 </Title>
      <Group justify="space-between">
        <GiphyWrapper id="hFmIU5GQF18Aw" width={300}/>
        <ImageWrapper source="/dog.jpg" width={240}/>
        <CardWrapper source="/roo.jpg" title="title" caption="caption"/>
      </Group>
      <Title>Check us out on social media!</Title>
      <Group justify="space-between">
        <InstagramWrapper url="https://www.instagram.com/p/CzKdyoPPnG6/"/>
        <TikTokWrapper url="https://www.tiktok.com/@roxwell007/video/7260298073304223019"/>
        <YouTubeWrapper url="https://www.youtube.com/watch?v=S7Sy-3fc_eE"/>
      </Group>
      <CarouselWrapper images={['https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-1200x834.jpg',
      'https://images.pexels.com/photos/268349/pexels-photo-268349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://dmzn2b8hkpq8b.cloudfront.net/images/products/515x515/S660231_4.jpg']}/>
    </Stack>
  );
};

export default Tab1;
