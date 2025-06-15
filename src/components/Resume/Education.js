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
import SchoolIcon from '@mui/icons-material/School';

import Degree from './Education/Degree';

const Education = ({ data, color }) => {
  const theme = useTheme();
  // Use the provided color or fall back to the purple color from theme
  const sectionColor = color || theme.palette.purple || '#9b59b6';

  return (
    <Box sx={{ mb: 6, position: 'relative' }}>
      <Box id="education" sx={{ scrollMarginTop: '70px' }} />

      {/* Section header with icon */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Avatar 
          sx={{ 
            bgcolor: sectionColor, 
            mr: 2,
            boxShadow: `0 4px 8px ${sectionColor}30`
          }}
        >
          <SchoolIcon />
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
          Education
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

      {/* Education items with staggered animation */}
      <Box sx={{ position: 'relative' }}>
        {data.map((degree, index) => (
          <Fade 
            key={degree.school} 
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
              <Degree
                data={degree}
                index={index}
                color={sectionColor}
              />
            </Box>
          </Fade>
        ))}
      </Box>
    </Box>
  );
};

Education.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    school: PropTypes.string,
    degree: PropTypes.string,
    link: PropTypes.string,
    year: PropTypes.number,
  })),
  color: PropTypes.string,
};

Education.defaultProps = {
  data: [],
  color: null,
};

export default Education;
