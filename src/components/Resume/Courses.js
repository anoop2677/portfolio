import React from 'react';
import PropTypes from 'prop-types';
import { 
  Typography, 
  Box, 
  Divider, 
  Paper, 
  Avatar, 
  useTheme,
  Fade
} from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';

import Course from './Courses/Course';

const getRows = (courses, color) => courses.sort((a, b) => {
  let ret = 0;
  if (a.university > b.university) ret = -1;
  else if (a.university < b.university) ret = 1;
  else if (a.number > b.number) ret = 1;
  else if (a.number < b.number) ret = -1;
  return ret;
}).map((course, idx) => (
  <Fade 
    key={course.title} 
    in={true} 
    timeout={300 + (idx * 100)}
    style={{ transitionDelay: `${idx * 50}ms` }}
  >
    <Box>
      <Course
        data={course}
        last={idx === courses.length - 1}
        color={color}
      />
    </Box>
  </Fade>
));

const Courses = ({ data, color }) => {
  const theme = useTheme();
  // Use the provided color or fall back to the orange color from theme
  const sectionColor = color || theme.palette.warning?.main || '#f39c12';

  return (
    <Box sx={{ mb: 6, position: 'relative' }}>
      <Box id="courses" sx={{ scrollMarginTop: '70px' }} />

      {/* Section header with icon */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Avatar 
          sx={{ 
            bgcolor: sectionColor, 
            mr: 2,
            boxShadow: `0 4px 8px ${sectionColor}30`
          }}
        >
          <MenuBookIcon />
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
          Selected Courses
        </Typography>
      </Box>

      <Divider sx={{ mb: 3 }} />

      {/* Courses content with enhanced styling */}
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
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.5 }}>
          <SchoolIcon sx={{ color: sectionColor, mr: 1 }} />
          <Typography 
            variant="subtitle1" 
            sx={{ 
              fontWeight: 600,
              color: sectionColor
            }}
          >
            Professional Development
          </Typography>
        </Box>

        <Box 
          component="ul" 
          sx={{ 
            display: 'flex', 
            flexWrap: 'wrap',
            m: 0,
            p: 0,
            listStyle: 'none'
          }}
        >
          {getRows(data, sectionColor)}
        </Box>
      </Paper>
    </Box>
  );
};

Courses.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    number: PropTypes.string,
    link: PropTypes.string,
    university: PropTypes.string,
  })),
  color: PropTypes.string,
};

Courses.defaultProps = {
  data: [],
  color: null,
};

export default Courses;
