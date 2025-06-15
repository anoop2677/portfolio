import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Chip, useTheme } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StarIcon from '@mui/icons-material/Star';

const SkillCard = ({ data, categories, color }) => {
  const theme = useTheme();
  const { category, competency, title } = data;

  // Get the section color (from props or theme)
  const sectionColor = color || theme.palette.primary.main;

  // Get the category color
  const categoryColor = categories
    .filter((cat) => category.includes(cat.name))
    .map((cat) => cat.color)[0] || sectionColor;

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
            fontSize: '0.7rem',
            transition: 'all 0.2s',
            mr: 0.1,
          }} 
        />
      );
    }
    return (
      <>
        {stars}
        <Typography 
          variant="caption" 
          sx={{ 
            ml: 0.3, 
            fontSize: '0.65rem', 
            color: 'text.secondary',
            fontWeight: 500,
            opacity: 0.8
          }}
        >
          ({competency}/5)
        </Typography>
      </>
    );
  };

  return (
    <Box 
      sx={{ 
        height: '100%',
        minHeight: '120px',
        p: 1.2,
        borderRadius: 2,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.03)',
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          transform: 'translateY(-3px)',
          boxShadow: '0 6px 12px rgba(0, 0, 0, 0.08)',
          borderColor: `${categoryColor}30`
        }
      }}
    >
      {/* Header with icon, title and rating */}
      <Box sx={{ mb: 0.8 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              backgroundColor: `${categoryColor}15`,
              color: categoryColor,
              width: 24,
              height: 24,
              borderRadius: '50%',
              mr: 0.8,
              flexShrink: 0
            }}
          >
            <CodeIcon sx={{ fontSize: '0.8rem' }} />
          </Box>
          <Typography 
            variant="body2" 
            component="span" 
            sx={{ 
              fontWeight: 600,
              color: 'text.primary',
              fontSize: '0.9rem',
              lineHeight: 1.2,
              flexGrow: 1
            }}
          >
            {title}
          </Typography>
        </Box>

        {/* Stars rating - now directly below the title */}
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 0.5 }}>
          {renderStars()}
        </Box>
      </Box>

      {/* Categories */}
      <Box sx={{ mt: 'auto' }}>
        <Typography 
          variant="caption" 
          component="div" 
          sx={{ 
            fontSize: '0.65rem', 
            color: 'text.secondary',
            mb: 0.3,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Box 
            component="span" 
            sx={{ 
              width: 3, 
              height: 3, 
              borderRadius: '50%', 
              backgroundColor: categoryColor,
              display: 'inline-block',
              mr: 0.5
            }} 
          />
          Categories:
        </Typography>
        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 0.4
        }}>
          {category.map((cat) => (
            <Chip 
              key={cat}
              label={cat} 
              size="small" 
              sx={{ 
                backgroundColor: `${categoryColor}10`,
                color: categoryColor,
                fontWeight: 500,
                fontSize: '0.6rem',
                height: 16,
                '& .MuiChip-label': { 
                  px: 0.8,
                  py: 0
                }
              }} 
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

SkillCard.propTypes = {
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

SkillCard.defaultProps = {
  categories: [],
  color: null,
};

export default SkillCard;
