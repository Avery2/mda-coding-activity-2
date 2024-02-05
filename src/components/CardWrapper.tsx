import React from 'react';
import { Card, Image, Text, Button, Group } from '@mantine/core';

interface CardWrapperProps {
  source: string;
  title: string;
  caption: string;
}

const CardWrapper: React.FC<CardWrapperProps> = ({ source, title, caption }) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={source} height={160} alt="Norway" />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{title}</Text>
      </Group>

      <Text size="sm" c="dimmed">
        {caption}
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
  );
};

export default CardWrapper;
