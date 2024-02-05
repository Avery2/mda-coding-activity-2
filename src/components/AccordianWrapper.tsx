import React from 'react';
import { Accordion } from '@mantine/core';

interface AccordionWrapperProps {
  data: {
    value: string;
    description: string;
  }[],
  width: number;
}

const AccordionWrapper: React.FC<AccordionWrapperProps> = ({ data, width }) => {
  const accordionItems = data.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion defaultValue={data[0]?.value} w={width}>
      {accordionItems}
    </Accordion>
  );
};

export default AccordionWrapper;
