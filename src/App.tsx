import React, { useState } from 'react';
import {
  Affix,
  Button,
  Loader,
  MantineProvider,
  Transition,
  useMantineTheme
} from '@mantine/core';
import { useMouse } from '@mantine/hooks';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import ParticlesBackground from './components/ParticlesBackground';


function App() {

  const[loading, setLoading] = useState(true);

  const theme = useMantineTheme();
  const { ref, x, y } = useMouse();


  return (
    <MantineProvider theme={{ 
        fontFamily: "Roboto, sans-serif",
        loader: "bars"
      }
    }>
      <div style={{
        // backgroundColor: theme.colors.gray[3],
      }}>
        <ParticlesBackground />
        <Header />
        <Content />
        <Footer />
        <Affix position={{ bottom: 20, left: 20 }}>
          <Transition transition="slide-up" mounted={y >= 800}>
            {(transitionStyles) => (
              <a href='https://github.com/WGoodsonDev/typescript-portfolio-mantine'
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant={"gradient"} gradient={{ from: 'teal', to: 'blue', deg: 60 }} rightIcon={<ExternalLinkIcon />} style={transitionStyles}>
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
