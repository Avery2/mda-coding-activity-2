import React from 'react';
import {Tabs, rem, Stack, Center, Container} from '@mantine/core';
import {IconPhoto, IconMessageCircle, IconSettings} from '@tabler/icons-react';
import Tab1 from '../tabs/Tab1';
import Tab2 from '../tabs/Tab2';
import Tab3 from '../tabs/Tab3';

interface TabsWrapperProps {
  tab1Name: string;
  tab2Name: string;
  tab3Name: string;
}

const TabsWrapper: React.FC<TabsWrapperProps> = ({tab1Name, tab2Name, tab3Name}) => {
  const iconStyle = {
    width: rem(12),
    height: rem(12),
  };

  return (
      <Tabs defaultValue="tab1">
        <Tabs.List grow justify="space-between">
          <Tabs.Tab value="tab1" leftSection={<IconPhoto style={iconStyle}/>}>
            {tab1Name}
          </Tabs.Tab>
          <Tabs.Tab value="tab2" leftSection={<IconMessageCircle style={iconStyle}/>}>
            {tab2Name}
          </Tabs.Tab>
          <Tabs.Tab value="tab3" leftSection={<IconSettings style={iconStyle}/>}>
            {tab3Name}
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="tab1">
          <Tab1 name={tab1Name}/>
        </Tabs.Panel>

        <Tabs.Panel value="tab2">
          <Tab2 name={tab2Name}/>
        </Tabs.Panel>

        <Tabs.Panel value="tab3">
          <Tab3 name={tab3Name}/>
        </Tabs.Panel>
      </Tabs>
  );
};

export default TabsWrapper;
