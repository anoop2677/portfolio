import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { 
  Typography, 
  Box, 
  Divider, 
  Paper, 
  Avatar, 
  useTheme,
  Fade,
  Grid
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import FilterListIcon from '@mui/icons-material/FilterList';

import CategoryButton from './Skills/CategoryButton';
import SkillCard from './Skills/SkillCard';

const Skills = ({ skills, categories, color }) => {
  const theme = useTheme();
  // Use the provided color or fall back to the red color from theme
  const sectionColor = color || theme.palette.error?.main || '#e74c3c';

  // Initialize state for category buttons
  const [buttons, setButtons] = useState(
    categories.map((cat) => cat.name).reduce((obj, key) => ({
      ...obj,
      [key]: false,
    }), { All: true })
  );

  // Handle category button click
  const handleCategoryClick = (label) => {
    // Toggle button that was clicked. Turn all other buttons off.
    const newButtons = Object.keys(buttons).reduce((obj, key) => ({
      ...obj,
      [key]: (label === key) && !buttons[key],
    }), {});

    // Turn on 'All' button if other buttons are off
    newButtons.All = !Object.keys(buttons).some((key) => newButtons[key]);
    setButtons(newButtons);
  };

  // Get the active category
  const activeCategory = Object.keys(buttons).reduce((cat, key) => (
    buttons[key] ? key : cat
  ), 'All');

  // Get filtered and sorted skills
  const filteredSkills = skills
    .sort((a, b) => {
      let ret = 0;
      if (a.competency > b.competency) ret = -1;
      else if (a.competency < b.competency) ret = 1;
      else if (a.category[0] > b.category[0]) ret = -1;
      else if (a.category[0] < b.category[0]) ret = 1;
      else if (a.title > b.title) ret = 1;
      else if (a.title < b.title) ret = -1;
      return ret;
    })
    .filter((skill) => (activeCategory === 'All' || skill.category.includes(activeCategory)));

  return (
    <Box sx={{ mb: 6, position: 'relative' }}>
      <Box id="skills" sx={{ scrollMarginTop: '70px' }} />

      {/* Section header with icon */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Avatar 
          sx={{ 
            bgcolor: sectionColor, 
            mr: 2,
            boxShadow: `0 4px 8px ${sectionColor}30`
          }}
        >
          <CodeIcon />
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
          Technical Skills
        </Typography>
      </Box>

      <Divider sx={{ mb: 3 }} />

      {/* Skills content with enhanced styling */}
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
        {/* Category filter section - more compact */}
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'center' },
            mb: 2,
            pb: 1.5,
            borderBottom: `1px solid ${sectionColor}15`
          }}
        >
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center',
              mb: { xs: 0.5, sm: 0 },
              mr: { sm: 1 },
              backgroundColor: `${sectionColor}08`,
              borderRadius: 1,
              px: 1,
              py: 0.5
            }}
          >
            <FilterListIcon sx={{ color: sectionColor, fontSize: '0.9rem', mr: 0.5 }} />
            <Typography 
              variant="caption" 
              sx={{ 
                fontWeight: 600,
                color: sectionColor,
                fontSize: '0.75rem'
              }}
            >
              Filter:
            </Typography>
          </Box>
          <Box 
            sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 0.5,
              flex: 1
            }}
          >
            {Object.keys(buttons).map((key) => (
              <CategoryButton
                label={key}
                key={key}
                active={buttons}
                handleClick={handleCategoryClick}
                color={sectionColor}
              />
            ))}
          </Box>
        </Box>

        {/* Skills grid with staggered animation */}
        <Grid container spacing={2}>
          {filteredSkills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={skill.title}>
              <Fade 
                in={true} 
                timeout={300 + (index * 100)}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <Box>
                  <SkillCard
                    categories={categories}
                    data={skill}
                    color={sectionColor}
                  />
                </Box>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    competency: PropTypes.number,
    category: PropTypes.arrayOf(PropTypes.string),
  })),
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
  })),
  color: PropTypes.string,
};

Skills.defaultProps = {
  skills: [],
  categories: [],
  color: null,
};

export default Skills;
