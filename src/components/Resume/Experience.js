import React from 'react';
import PropTypes from 'prop-types';
import { 
  Typography, 
  Box, 
  Divider, 
  Avatar, 
  useTheme,
  Fade
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';

import Job from './Experience/Job';

const Experience = ({ data, color }) => {
  const theme = useTheme();
  // Use the provided color or fall back to the success color from theme
  const sectionColor = color || theme.palette.success.main;

  return (
    <Box sx={{ mb: 6, position: 'relative' }}>
      <Box id="experience" sx={{ scrollMarginTop: '70px' }} />

      {/* Section header with icon */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Avatar 
          sx={{ 
            bgcolor: sectionColor, 
            mr: 2,
            boxShadow: `0 4px 8px ${sectionColor}30`
          }}
        >
          <WorkIcon />
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
          Professional Experience
        </Typography>
      </Box>

      <Divider sx={{ mb: 3 }} />

      {/* Timeline connector */}
      <Box sx={{ 
        position: 'absolute',
        left: -30,
        top: 80,
        bottom: 0,
        width: '2px',
        backgroundColor: `${sectionColor}20`,
        zIndex: 0,
        display: { xs: 'none', md: 'block' }
      }} />

      {/* Experience items with staggered animation */}
      <Box sx={{ position: 'relative' }}>
        {data.map((job, index) => (
          <Fade 
            key={job.company} 
            in={true} 
            timeout={500 + (index * 200)}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <Box sx={{ 
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                left: -30,
                top: 20,
                width: 16,
                height: 16,
                borderRadius: '50%',
                backgroundColor: sectionColor,
                border: '3px solid white',
                boxShadow: `0 0 0 3px ${sectionColor}20`,
                zIndex: 1,
                display: { xs: 'none', md: 'block' }
              }
            }}>
              <Job
                data={job}
                index={index}
              />
            </Box>
          </Fade>
        ))}
      </Box>
    </Box>
  );
};

Experience.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          title: PropTypes.string,
          content: PropTypes.string,
        }),
      ])
    ),
  })),
  color: PropTypes.string,
};

Experience.defaultProps = {
  data: [],
  color: null,
};

export default Experience;
