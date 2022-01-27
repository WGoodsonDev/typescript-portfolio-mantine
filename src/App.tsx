import React, { useState } from 'react';
import { MantineProvider } from '@mantine/core';
import { AppShell, ThemeIcon, useMantineTheme, Divider } from '@mantine/core';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {

  const theme = useMantineTheme();

  return (
    <MantineProvider>
      <div style={{
        backgroundColor: theme.colors.gray[3],
      }}>
        <Header />
        <Divider />
        <Content />
        <Divider />
        <Footer />
      </div>

    </MantineProvider>

  );
}

export default App;
