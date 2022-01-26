import React, { useState } from 'react';
import { Button , Container, Grid, Tabs } from '@mantine/core';

function App() {
  return (
    <>
      <Tabs>
          <Tabs.Tab label={'Portfolio'}>Portfolio Page</Tabs.Tab>
          <Tabs.Tab label={'Other Page'}>Other Page</Tabs.Tab>
          <Tabs.Tab label={'Other Page1'}>Other Page1</Tabs.Tab>
      </Tabs>
      <Container fluid={true} style={{ marginBottom: '20vh' }}>
        <Grid align={'start'} justify={'center'} style={{ height: 'inherit' }}>
          <Grid.Col span={3}>
            <Button size='xl'>Hi there</Button>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}

export default App;
