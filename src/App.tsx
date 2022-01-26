import React, { useState } from 'react';
import { MantineProvider } from '@mantine/core';
import { AppShell, ThemeIcon, useMantineTheme } from '@mantine/core';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {

  const theme = useMantineTheme();

  return (
    <MantineProvider>
      <Header />
      <Content />
      <Footer />      
    </MantineProvider>
    
  );
}

export default App;
