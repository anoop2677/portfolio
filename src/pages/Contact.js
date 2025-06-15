import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Typography, 
  Grid, 
  Box, 
  Link as MuiLink,
  Paper,
  Avatar,
  Divider,
  Button,
  Fade,
  useTheme
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone, faComments } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';
import { PageHeader, PageContainer } from '../components/common';
import { colors } from '../styles/theme';

// Reusable styles
const styles = {
  contactCard: {
    borderRadius: 3,
    overflow: 'hidden',
    height: '100%',
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 12px 20px rgba(0,0,0,0.1)'
    }
  },
  cardHeader: (color) => ({
    p: 3, 
    background: `linear-gradient(135deg, ${color}CC, ${color}99)`,
    color: 'white',
    display: 'flex',
    alignItems: 'center'
  }),
  cardAvatar: (color) => ({
    bgcolor: 'white', 
    color: color,
    width: 56,
    height: 56,
    mr: 2,
    boxShadow: '0 3px 5px rgba(0,0,0,0.2)'
  }),
  contactLink: (color) => ({
    fontWeight: 'medium',
    display: 'flex',
    alignItems: 'center',
    color: color,
    textDecoration: 'none',
    py: 1,
    px: 2,
    borderRadius: 2,
    border: `1px solid ${color}30`,
    transition: 'all 0.2s',
    '&:hover': {
      backgroundColor: `${color}10`,
      transform: 'translateX(5px)',
      boxShadow: `0 3px 5px ${color}20`
    }
  }),
  actionButton: {
    borderRadius: 6,
    px: 3,
    py: 1,
    textTransform: 'none',
    fontWeight: 'bold'
  },
  gradientPaper: {
    borderRadius: 3,
    background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(245,247,250,0.85))',
    position: 'relative',
    overflow: 'hidden'
  }
};

// Contact card component
const ContactCard = ({ icon, title, description, link, linkText, color, delay }) => (
  <Fade in={true} timeout={1000} style={{ transitionDelay: `${delay}ms` }}>
    <Paper elevation={3} sx={styles.contactCard}>
      <Box sx={styles.cardHeader(color)}>
        <Avatar sx={styles.cardAvatar(color)}>
          <FontAwesomeIcon icon={icon} size="lg" />
        </Avatar>
        <Typography variant="h5" fontWeight="bold">
          {title}
        </Typography>
      </Box>
      <Box sx={{ p: 3 }}>
        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
          {description}
        </Typography>
        <MuiLink 
          href={link} 
          variant="body1"
          sx={styles.contactLink(color)}
        >
          <FontAwesomeIcon icon={icon} style={{ marginRight: '8px' }} />
          {linkText}
        </MuiLink>
      </Box>
    </Paper>
  </Fade>
);

/**
 * Contact component - The contact page of the application
 * 
 * @returns {React.ReactElement} The Contact component
 */
const Contact = () => {
  const theme = useTheme();

  // Contact methods data
  const contactMethods = [
    {
      icon: faEnvelope,
      title: 'Email Me',
      description: 'Feel free to get in touch. I typically respond within 24 hours:',
      link: 'mailto:kumaranoop527@gmail.com',
      linkText: 'kumaranoop527@gmail.com',
      color: colors.primary,
      delay: 200
    },
    {
      icon: faPhone,
      title: 'Call Me',
      description: 'Available for calls during business hours (CET timezone):',
      link: 'tel:+31619894182',
      linkText: '+31 619 894 182',
      color: theme.palette.secondary.main,
      delay: 400
    }
  ];

  // Social links data
  const socialLinks = [
    {
      icon: faEnvelope,
      label: 'Send Email',
      link: 'mailto:kumaranoop527@gmail.com',
      variant: 'contained',
      color: 'primary'
    },
    {
      icon: faLinkedin,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/anoop-kumar-b9b4a2147/',
      variant: 'outlined',
      color: 'primary',
      external: true
    },
    {
      icon: faGithub,
      label: 'GitHub',
      link: 'https://github.com/anoop2677',
      variant: 'outlined',
      color: 'secondary',
      external: true
    },
    {
      icon: faPhone,
      label: '+31 619894182',
      link: 'tel:+31619894182',
      variant: 'outlined',
      color: theme.palette.secondary.main,
    }
  ];

  return (
    <Main
      title="Contact"
      description="Contact Anoop Kumar via email @ kumaranoop527@gmail.com"
    >
      <PageContainer>
        <Fade in={true} timeout={800}>
          <Box>
            <PageHeader 
              title={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar 
                    sx={{ 
                      bgcolor: colors.primary, 
                      mr: 2,
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                    }}
                  >
                    <FontAwesomeIcon icon={faComments} />
                  </Avatar>
                  <Typography variant="h4" component="span" fontWeight="bold">
                    Contact
                  </Typography>
                </Box>
              }
              path="/contact" 
              subtitle="Let's connect and discuss opportunities"
            />

            {/* Introduction */}
            <Paper
              elevation={2}
              sx={{
                ...styles.gradientPaper,
                p: 3,
                mb: 4,
                borderRadius: 2,
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '5px',
                  height: '100%',
                  background: `linear-gradient(to bottom, ${colors.primary}, ${theme.palette.secondary.main})`,
                  borderRadius: '5px 0 0 5px'
                }
              }}
            >
              <Typography variant="body1" paragraph sx={{ 
                color: 'text.secondary',
                lineHeight: 1.7,
                fontSize: '1.05rem',
                maxWidth: '800px',
                mb: 3
              }}>
                I'm always interested in hearing about new opportunities, projects, or just connecting with fellow developers. Feel free to reach out through any of the channels below.
              </Typography>
            </Paper>

            {/* Call to Action */}
            <Fade in={true} timeout={1000}>
              <Paper 
                elevation={2} 
                sx={{ 
                  ...styles.gradientPaper,
                  p: 3,
                  textAlign: 'center'
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
                  Looking forward to hearing from you!
                </Typography>
                <Divider sx={{ mb: 3 }} />
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                  {socialLinks.map((link, index) => (
                    <Button
                      key={index}
                      variant={link.variant}
                      color={link.color}
                      startIcon={<FontAwesomeIcon icon={link.icon} />}
                      component={MuiLink}
                      href={link.link}
                      target={link.external ? "_blank" : "_self"}
                      rel={link.external ? "noopener noreferrer" : ""}
                      sx={styles.actionButton}
                    >
                      {link.label}
                    </Button>
                  ))}
                </Box>
              </Paper>
            </Fade>
          </Box>
        </Fade>
      </PageContainer>
    </Main>
  );
};

export default Contact;
