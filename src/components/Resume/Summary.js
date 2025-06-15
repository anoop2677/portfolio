import React from 'react';
import PropTypes from 'prop-types';
import { 
  Typography, 
  Box, 
  Divider, 
  Paper, 
  Chip,
  Avatar,
  useTheme
} from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';

const Summary = ({ data, color }) => {
  const theme = useTheme();
  // Use the provided color or fall back to the primary color from theme
  const sectionColor = color || theme.palette.primary.main;

  return (
    <Box sx={{ mb: 6, position: 'relative' }}>
      <Box id="summary" sx={{ scrollMarginTop: '70px' }} />

      {/* Section header with icon */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Avatar 
          sx={{ 
            bgcolor: sectionColor, 
            mr: 2,
            boxShadow: `0 4px 8px ${sectionColor}30`
          }}
        >
          <DescriptionIcon />
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
          Professional Summary
        </Typography>
      </Box>

      <Divider sx={{ mb: 3 }} />

      {/* Summary content with enhanced styling */}
      <Paper 
        elevation={2} 
        sx={{ 
          p: 3, 
          borderRadius: 2,
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
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <PersonIcon sx={{ color: sectionColor, mr: 1 }} />
          <Typography 
            variant="subtitle1" 
            sx={{ 
              fontWeight: 600,
              color: sectionColor
            }}
          >
            About Me
          </Typography>
        </Box>

        {data.map((item, i) => (
          <Box key={i} sx={{ position: 'relative' }}>
            <Typography 
              variant="body1" 
              paragraph 
              sx={{ 
                mb: 3,
                lineHeight: 1.7,
                fontSize: '1rem',
                color: 'text.primary',
                textAlign: 'justify',
                '&:last-child': { mb: 0 }
              }}
            >
              {item.content}
            </Typography>

            {/* Key skills highlight */}
            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 1,
              mt: 2
            }}>
              {['Java', 'Spring Boot', 'Kafka', 'AWS', 'Kubernetes', 'MongoDB'].map((skill) => (
                <Chip
                  key={skill}
                  icon={<StarIcon fontSize="small" sx={{ color: sectionColor }} />}
                  label={skill}
                  variant="outlined"
                  size="small"
                  sx={{ 
                    borderRadius: '16px',
                    fontWeight: 500,
                    color: sectionColor,
                    borderColor: `${sectionColor}50`,
                    transition: 'all 0.2s',
                    '&:hover': {
                      backgroundColor: `${sectionColor}10`,
                      borderColor: sectionColor,
                      transform: 'translateY(-2px)',
                      boxShadow: `0 3px 5px ${sectionColor}20`
                    }
                  }}
                />
              ))}
            </Box>
          </Box>
        ))}
      </Paper>
    </Box>
  );
};

Summary.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  })),
  color: PropTypes.string,
};

Summary.defaultProps = {
  data: [],
  color: null,
};

export default Summary;
