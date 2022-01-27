import React, { useState } from 'react';
import {
  Affix,
  Button,
  MantineProvider,
  Transition,
  useMantineTheme
} from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {

  const theme = useMantineTheme();
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <MantineProvider>
      <div style={{
        backgroundColor: theme.colors.gray[3],
      }}>
        <Header />
        <Content />
        <Footer />
        <Affix position={{ bottom: 20, left: 20 }}>
          <Transition transition="slide-up" mounted={scroll.y > 300}>
            {(transitionStyles) => (
              <a href='https://github.com/WGoodsonDev/typescript-portfolio-mantine'
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button rightIcon={<ExternalLinkIcon />} style={transitionStyles}>
                  View source
                </Button>
              </a>
            )}

          </Transition>


        </Affix>
      </div>

    </MantineProvider >

  );
}

export default App;
