import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { 
  Typography, 
  Box, 
  Divider, 
  Button, 
  Paper, 
  Avatar, 
  useTheme,
  Fade,
  Tooltip
} from '@mui/material';
import RecommendIcon from '@mui/icons-material/Recommend';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import EmailIcon from '@mui/icons-material/Email';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const References = ({ color }) => {
  const theme = useTheme();
  // Use the provided color or fall back to the turquoise color
  const sectionColor = color || theme.palette.info?.main || '#1abc9c';

  return (
    <Box sx={{ mb: 6, position: 'relative' }}>
      <Box id="references" sx={{ scrollMarginTop: '70px' }} />

      {/* Section header with icon */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Avatar 
          sx={{ 
            bgcolor: sectionColor, 
            mr: 2,
            boxShadow: `0 4px 8px ${sectionColor}30`
          }}
        >
          <RecommendIcon />
        </Avatar>
        <Typography 
          variant="h5" 
          component="h2" 
          sx={{ 
            fontWeight: 'bold',
            color: 'text.primary',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -8,
              left: 0,
              width: '40px',
              height: '3px',
              backgroundColor: sectionColor,
              borderRadius: '3px'
            }
          }}
        >
          References
        </Typography>
      </Box>

      <Divider sx={{ mb: 3 }} />

      {/* References content with enhanced styling */}
      <Fade in={true} timeout={500}>
        <Paper 
          elevation={2} 
          sx={{ 
            p: 4, 
            borderRadius: 3,
            textAlign: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            boxShadow: `0 8px 16px ${sectionColor}10`,
            position: 'relative',
            overflow: 'hidden',
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: `0 12px 20px ${sectionColor}20`
            },
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '5px',
              height: '100%',
              backgroundColor: sectionColor,
              borderRadius: '5px 0 0 5px'
            }
          }}
        >
          <FormatQuoteIcon 
            sx={{ 
              fontSize: '3rem', 
              color: `${sectionColor}30`,
              mb: 1
            }} 
          />

          <Typography 
            variant="h5" 
            gutterBottom
            sx={{ 
              fontWeight: 600,
              color: 'text.primary',
              mb: 2,
              fontStyle: 'italic',
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: '25%',
                width: '50%',
                height: '2px',
                background: `linear-gradient(90deg, transparent, ${sectionColor}50, transparent)`,
                borderRadius: '2px'
              }
            }}
          >
            Interested in working together?
          </Typography>

          <Typography 
            variant="body1" 
            paragraph
            sx={{ 
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
              mb: 3,
              lineHeight: 1.7
            }}
          >
            Professional references are available upon request. Feel free to reach out if you'd like to discuss potential opportunities or collaborations.
          </Typography>

          <Tooltip title="Send me a message" arrow placement="top">
            <Button 
              component={Link} 
              to="/contact" 
              variant="contained" 
              endIcon={<ArrowForwardIcon />}
              sx={{ 
                mt: 1,
                borderRadius: 6,
                textTransform: 'none',
                fontWeight: 600,
                px: 3,
                py: 1.2,
                backgroundColor: sectionColor,
                boxShadow: `0 4px 12px ${sectionColor}40`,
                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                '&:hover': {
                  backgroundColor: `${sectionColor}E0`,
                  transform: 'translateY(-3px) scale(1.05)',
                  boxShadow: `0 6px 15px ${sectionColor}60`,
                },
                '&:active': {
                  transform: 'translateY(-1px) scale(1.02)',
                  boxShadow: `0 3px 8px ${sectionColor}40`,
                }
              }}
            >
              Contact Me
            </Button>
          </Tooltip>
        </Paper>
      </Fade>
    </Box>
  );
};

References.propTypes = {
  color: PropTypes.string,
};

References.defaultProps = {
  color: null,
};

export default References;
