import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Container, Grid, Box } from '@mui/material';

import Analytics from '../components/Template/Analytics';
import Navigation from '../components/Template/Navigation';
import SideBar from '../components/Template/SideBar';
import ScrollToTop from '../components/Template/ScrollToTop';

const Main = (props) => (
  <>
    <Analytics />
    <ScrollToTop />
    <Helmet titleTemplate="%s | Anoop Kumar" defaultTitle="Anoop Kumar">
      {props.title && <title>{props.title}</title>}
      <meta name="description" content={props.description} />
    </Helmet>
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column',
      minHeight: '100vh',
      maxWidth: '1400px',
      mx: 'auto',
      px: { xs: 2, sm: 3 }
    }}>
      <Navigation />
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' },
        flex: 1,
        mt: 2
      }}>
        {!props.fullPage && (
          <Box 
            sx={{ 
              flex: { md: '0 0 33.333333%' }, 
              maxWidth: { md: '33.333333%' },
              pr: { md: 1 }
            }}
          >
            <SideBar />
          </Box>
        )}
        <Box 
          component="main" 
          sx={{ 
            flex: { md: '0 0 66.666667%' }, 
            maxWidth: { md: '66.666667%' },
            pl: { md: 3 },
            mb: 4 
          }}
        >
          {props.children}
        </Box>
      </Box>
    </Box>
  </>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description: "Anoop Kumar's personal website.",
};

export default Main;
