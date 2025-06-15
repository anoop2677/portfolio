import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Box, Typography, Container } from '@mui/material';

const PageNotFound = () => (
  <Container maxWidth="md">
    <Helmet title="404 Not Found">
      <meta name="description" content="The content you are looking for cannot be found." />
    </Helmet>
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        py: 5
      }}
    >
      <Typography 
        variant="h2" 
        component="h1" 
        gutterBottom 
        data-testid="heading"
        sx={{ fontWeight: 'bold' }}
      >
        Page Not Found
      </Typography>
      <Typography variant="body1">
        Return <Link to="/">home</Link>.
      </Typography>
    </Box>
  </Container>
);

export default PageNotFound;
