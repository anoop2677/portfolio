import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, LinearProgress, Chip, useTheme } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StarIcon from '@mui/icons-material/Star';

const SkillBar = ({ data, categories, color }) => {
  const theme = useTheme();
  const { category, competency, title } = data;

  // Get the section color (from props or theme)
  const sectionColor = color || theme.palette.primary.main;

  // Get the category color
  const categoryColor = categories
    .filter((cat) => category.includes(cat.name))
    .map((cat) => cat.color)[0] || sectionColor;

  // Calculate the progress value (0-100)
  const progressValue = Math.min(100, Math.max((competency / 5.0) * 100.0, 0));

  // Create rating stars based on competency
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <StarIcon 
          key={i} 
          fontSize="small" 
          sx={{ 
            color: i <= competency ? categoryColor : 'rgba(0, 0, 0, 0.1)',
            fontSize: '1rem',
            transition: 'all 0.2s',
            '&:hover': {
              transform: 'scale(1.2)'
            }
          }} 
        />
      );
    }
    return stars;
  };

  return (
    <Box 
      sx={{ 
        mb: 2.5,
        p: 2,
        borderRadius: 2,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.03)',
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          transform: 'translateY(-3px)',
          boxShadow: '0 6px 12px rgba(0, 0, 0, 0.08)',
          borderColor: `${categoryColor}30`
        }
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              backgroundColor: `${categoryColor}15`,
              color: categoryColor,
              width: 32,
              height: 32,
              borderRadius: '50%',
              mr: 1.5,
              flexShrink: 0
            }}
          >
            <CodeIcon fontSize="small" />
          </Box>
          <Typography 
            variant="body1" 
            component="span" 
            sx={{ 
              fontWeight: 600,
              color: 'text.primary',
              mr: 1.5,
              fontSize: '0.95rem'
            }}
          >
            {title}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {category.map((cat) => (
              <Chip 
                key={cat}
                label={cat} 
                size="small" 
                sx={{ 
                  backgroundColor: `${categoryColor}15`,
                  color: categoryColor,
                  fontWeight: 500,
                  fontSize: '0.7rem',
                  height: 22,
                  border: `1px solid ${categoryColor}30`,
                  transition: 'all 0.2s',
                  '&:hover': {
                    backgroundColor: `${categoryColor}25`,
                    transform: 'translateY(-2px)',
                    boxShadow: `0 3px 5px ${categoryColor}10`
                  }
                }} 
              />
            ))}
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {renderStars()}
        </Box>
      </Box>
      <Box sx={{ position: 'relative' }}>
        <LinearProgress 
          variant="determinate" 
          value={progressValue} 
          sx={{ 
            height: 10, 
            borderRadius: 5,
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            '& .MuiLinearProgress-bar': {
              backgroundColor: categoryColor,
              borderRadius: 5,
              transition: 'transform 1s cubic-bezier(0.65, 0, 0.35, 1)'
            }
          }} 
        />
        <Typography 
          variant="caption" 
          sx={{ 
            position: 'absolute', 
            right: 0, 
            top: '100%', 
            color: 'text.secondary',
            fontSize: '0.7rem',
            fontWeight: 500
          }}
        >
          {competency}/5
        </Typography>
      </Box>
    </Box>
  );
};

SkillBar.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.arrayOf(PropTypes.string).isRequired,
    competency: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
  })),
  color: PropTypes.string,
};

SkillBar.defaultProps = {
  categories: [],
  color: null,
};

export default SkillBar;
