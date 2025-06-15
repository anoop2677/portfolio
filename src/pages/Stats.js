import React from 'react';
import { Typography } from '@mui/material';

import Main from '../layouts/Main';
import { PageHeader, PageContainer } from '../components/common';
import Personal from '../components/Stats/Personal';

/**
 * Stats component - The stats page of the application
 * 
 * @returns {React.ReactElement} The Stats component
 */
const Stats = () => {
  return (
    <Main
      title="Stats"
      description="Statistics about Anoop Kumar"
    >
      <PageContainer id="stats">
        <PageHeader 
          title="Stats"
          path="/stats" 
        />

        <Typography 
          variant="body1" 
          paragraph 
          sx={{ 
            mb: 4, 
            maxWidth: '800px'
          }}
        >
          Welcome to my stats page. Here you'll find some interesting facts and figures about me, 
          including real-time counters and other data points that give you a glimpse into my 
          professional journey.
        </Typography>

        <Personal />
      </PageContainer>
    </Main>
  );
};

export default Stats;
