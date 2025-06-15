import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Card, 
  CardContent, 
  Typography, 
  Avatar, 
  Button, 
  Box, 
  Divider,
  Link as MuiLink
} from '@mui/material';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => {
  const location = useLocation();

  return (
    <Card 
      elevation={2} 
      sx={{ 
        position: 'sticky',
        top: '20px',
        borderRadius: 2,
        overflow: 'hidden'
      }}
    >
      <CardContent sx={{ p: 0 }}>
        {/* Profile Section */}
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            p: 3,
            pb: 2,
            backgroundColor: 'rgba(60, 120, 216, 0.05)'
          }}
        >
          <Avatar
            component={Link}
            to="/"
            src={`${PUBLIC_URL}/images/me.jpg`}
            alt="Anoop Kumar"
            sx={{ 
              width: 120, 
              height: 120, 
              mb: 2,
              border: '3px solid white',
              boxShadow: '0 3px 5px rgba(0,0,0,0.1)'
            }}
          />
          <Typography variant="h5" component="h2" gutterBottom>
            Anoop Kumar
          </Typography>
          <Typography 
            variant="body2" 
            component={MuiLink} 
            href="mailto:kumaranoop527@gmail.com"
            sx={{ 
              color: 'primary.main',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline'
              }
            }}
          >
            kumaranoop527@gmail.com
          </Typography>
        </Box>

        <Divider />

        {/* About Section */}
        <Box sx={{ 
          p: 3, 
          background: 'linear-gradient(to bottom, rgba(245, 247, 250, 0.8), rgba(235, 242, 250, 0.6))',
          borderRadius: '0 0 4px 4px',
          boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.05)'
        }}>
          <Typography 
            variant="h6" 
            component="h2" 
            gutterBottom 
            sx={{ 
              borderBottom: '2px solid rgba(60, 120, 216, 0.3)', 
              paddingBottom: 1,
              fontWeight: 600,
              color: '#2c3e50',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -1,
                left: 0,
                width: '40%',
                height: '2px',
                backgroundColor: '#3498db',
                borderRadius: '1px'
              }
            }}
          >
            About
          </Typography>

          <Typography 
            variant="body2" 
            component="div" 
            sx={{ 
              mb: 2.5,
              color: '#34495e',
              fontWeight: 500,
              fontSize: '0.95rem',
              letterSpacing: '0.01em',
              textShadow: '0 1px 1px rgba(255,255,255,0.8)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
              }
            }}
          >
            I'm <Box component="span" sx={{ 
              color: '#3498db', 
              fontWeight: 700,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -2,
                left: 0,
                width: '100%',
                height: '2px',
                backgroundColor: 'rgba(52, 152, 219, 0.3)',
                borderRadius: '1px'
              }
            }}>Anoop</Box>, a Software Engineer with <Box component="span" sx={{ 
              color: '#3498db', 
              fontWeight: 700,
              background: 'rgba(52, 152, 219, 0.1)',
              padding: '0 4px',
              borderRadius: '3px'
            }}>4+ years</Box> of backend development experience.
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, fontSize: '0.88rem' }}>
            <Box component="span" sx={{ 
              fontWeight: 600, 
              color: '#2c3e50',
              display: 'block',
              mb: 0.8,
              fontSize: '0.9rem',
              position: 'relative',
              paddingLeft: '12px',
              '&::before': {
                content: '""',
                position: 'absolute',
                left: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                width: '6px',
                height: '6px',
                backgroundColor: '#3498db',
                borderRadius: '50%'
              }
            }}>Skills</Box>
            <Box component="div" sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 0.8, 
              ml: 0.5 
            }}>
              {['Java', 'Spring Boot', 'Kafka', 'AWS', 'Kubernetes', 'Terraform'].map((skill) => (
                <Box 
                  key={skill} 
                  component="span" 
                  sx={{ 
                    bgcolor: 'rgba(60, 120, 216, 0.1)', 
                    color: '#3498db',
                    px: 1.2, 
                    py: 0.4, 
                    borderRadius: 5,
                    fontSize: '0.78rem',
                    fontWeight: 500,
                    border: '1px solid rgba(52, 152, 219, 0.2)',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 3px 5px rgba(0,0,0,0.1)',
                      bgcolor: 'rgba(52, 152, 219, 0.15)',
                    }
                  }}
                >
                  {skill}
                </Box>
              ))}
            </Box>
          </Typography>

          <Typography variant="body2" sx={{ 
            mb: 2.5, 
            fontSize: '0.85rem', 
            lineHeight: 1.7,
            color: '#34495e',
            padding: '8px 12px',
            borderLeft: '2px solid rgba(52, 152, 219, 0.3)',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            borderRadius: '0 4px 4px 0',
            fontStyle: 'italic',
            letterSpacing: '0.01em'
          }}>
            Proven success migrating legacy systems, automating workflows, and improving performance. Strong collaborator practicing Agile and best coding standards.
          </Typography>

          {location.pathname !== '/resume' && (
            <Button 
              variant="outlined" 
              component={Link} 
              to="/resume"
              sx={{ 
                mt: 1.5,
                borderRadius: 6,
                textTransform: 'none',
                borderColor: '#3498db',
                color: '#3498db',
                fontWeight: 500,
                px: 2.5,
                py: 0.8,
                fontSize: '0.85rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                  transition: 'all 0.6s ease',
                },
                '&:hover': {
                  backgroundColor: 'rgba(52, 152, 219, 0.08)',
                  borderColor: '#2980b9',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  '&::before': {
                    left: '100%',
                  }
                },
                '&:active': {
                  transform: 'translateY(0)',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                }
              }}
            >
              Learn More
            </Button>
          )}
        </Box>

        <Divider />

        {/* Footer Section */}
        <Box 
          sx={{ 
            p: 3,
            pt: 2,
            backgroundColor: 'rgba(60, 120, 216, 0.05)'
          }}
        >
          <Box sx={{ mb: 1 }}>
            <ContactIcons />
          </Box>
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', textAlign: 'center', mt: 1 }}>
            &copy; Anoop Kumar
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SideBar;
