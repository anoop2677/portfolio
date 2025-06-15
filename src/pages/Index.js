import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Typography, 
  Box, 
  Grid, 
  Divider, 
  Button, 
  Card,
  Link as MuiLink
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFileAlt, faChartBar, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import Main from '../layouts/Main';
import { PageHeader, PageContainer, ContentCard } from '../components/common';
import { colors } from '../styles/theme';

/**
 * LinkCard component - A card with a link to another page
 * 
 * @param {Object} props - Component props
 * @param {string} props.to - The path to link to
 * @param {Object} props.icon - The icon to display
 * @param {string} props.title - The title of the card
 * @param {string} props.description - The description of the card
 * @returns {React.ReactElement} The LinkCard component
 */
const LinkCard = ({ to, icon, title, description }) => {
  const iconElement = (
    <FontAwesomeIcon 
      icon={icon} 
      size="lg" 
      style={{ color: colors.primary }} 
    />
  );

  const action = (
    <Button 
      component={Link} 
      to={to} 
      variant="outlined" 
      color="primary"
      sx={{ 
        alignSelf: 'flex-start',
        borderRadius: 2,
        textTransform: 'none',
        '&:hover': {
          backgroundColor: colors.background.dark
        }
      }}
    >
      View {title}
    </Button>
  );

  return (
    <ContentCard
      icon={iconElement}
      title={title}
    >
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flex: 1 }}>
        {description}
      </Typography>
      {action}
    </ContentCard>
  );
};

/**
 * Index component - The home page of the application
 * 
 * @returns {React.ReactElement} The Index component
 */
const Index = () => (
  <Main
    title="Home"
    description={"Anoop Kumar's personal website. GGSIPU affiliated BPIT graduate, "
    + 'Software Developer @Tavisca.'}
  >
    <PageContainer id="index">
      <PageHeader 
        title="Welcome to My Portfolio" 
        path="/" 
        subtitle="A beautiful, responsive, statically-generated, react application written with modern Javascript."
      />

      <Box sx={{ mb: 4 }}>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
          Welcome to my website. Please feel free to explore the different sections to learn more about me and my work.
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={4}>
          <LinkCard 
            to="/resume" 
            icon={faFileAlt} 
            title="Resume" 
            description="View my professional experience, skills, and education."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <LinkCard 
            to="/stats" 
            icon={faChartBar} 
            title="Stats" 
            description="Check out some interesting statistics about me."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <LinkCard 
            to="/contact" 
            icon={faEnvelope} 
            title="Contact" 
            description="Get in touch with me via email or social media."
          />
        </Grid>
      </Grid>

      <Card 
        elevation={1} 
        sx={{ 
          borderRadius: 2,
          backgroundColor: colors.background.light,
          p: 3,
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Typography variant="body1" sx={{ mb: { xs: 2, sm: 0 } }}>
          This project is open source. View the source code on GitHub.
        </Typography>
        <Button 
          component={MuiLink}
          href="https://github.com/anoop2677/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          variant="contained" 
          color="primary"
          startIcon={<FontAwesomeIcon icon={faGithub} />}
          sx={{ 
            borderRadius: 2,
            textTransform: 'none',
            fontWeight: 'medium'
          }}
        >
          View on GitHub
        </Button>
      </Card>
    </PageContainer>
  </Main>
);

export default Index;
