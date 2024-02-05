import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {MantineProvider} from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/carousel/styles.css';
import {theme} from './theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MantineProvider theme={theme}><App/></MantineProvider>
  </React.StrictMode>
);
