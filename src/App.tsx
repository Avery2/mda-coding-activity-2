import React from 'react';
import './App.css';
import {AppShell, Center, Stack} from '@mantine/core';
import TabsWrapper from './components/TabsWrapper';

function App() {
  return (
    <Center>
      <Stack h={300} w={1100} bg="var(--mantine-color-body)">
        <AppShell header={{height: 60}} padding="md">
          <AppShell.Header>This is my Web app!</AppShell.Header>
          <AppShell.Main>
            <TabsWrapper tab1Name="Demo page!" tab2Name="tab 2" tab3Name="tab 3"/>
          </AppShell.Main>
        </AppShell>
      </Stack>
    </Center>
  );
}

export default App;
