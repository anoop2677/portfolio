import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Link, Chip, useTheme } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';

const Course = ({ data, last, color }) => {
  const theme = useTheme();
  // Use the provided color or fall back to the primary color from theme
  const courseColor = color || theme.palette.primary.main;

  // Determine which icon to use based on the university
  const getIcon = () => {
    if (data.university.toLowerCase().includes('academy')) {
      return <CodeIcon fontSize="small" />;
    }
    return <SchoolIcon fontSize="small" />;
  };

  return (
    <Box 
      component="li" 
      sx={{ 
        display: 'inline-flex',
        alignItems: 'center',
        mr: 1.5,
        mb: 1.5,
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-3px)'
        }
      }}
    >
      <Chip
        icon={getIcon()}
        label={
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {data.number && (
              <Typography 
                variant="body2" 
                component="span" 
                sx={{ 
                  fontWeight: 'bold',
                  mr: 0.5,
                  color: `${courseColor}DD`
                }}
              >
                {data.number}:
              </Typography>
            )}
            <Typography 
              variant="body2" 
              component={Link}
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                color: 'inherit',
                textDecoration: 'none',
                fontWeight: 500,
                transition: 'all 0.2s',
                '&:hover': { 
                  textDecoration: 'underline',
                  color: courseColor
                }
              }}
            >
              {data.title}
            </Typography>
          </Box>
        }
        sx={{ 
          height: 'auto',
          py: 0.75,
          px: 1.5,
          borderRadius: 4,
          backgroundColor: `${courseColor}15`,
          border: `1px solid ${courseColor}30`,
          color: 'text.primary',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: `${courseColor}25`,
            boxShadow: `0 4px 8px ${courseColor}20`,
            '& .MuiChip-icon': {
              color: courseColor
            }
          },
          '& .MuiChip-icon': {
            color: `${courseColor}99`,
            marginLeft: '8px',
            transition: 'color 0.3s ease'
          }
        }}
      />
      {!last && (
        <Typography 
          variant="body2" 
          component="span" 
          sx={{ 
            mx: 0.75,
            color: `${courseColor}50`,
            fontSize: '1.2rem'
          }}
        >
          &#8226;
        </Typography>
      )}
    </Box>
  );
};

Course.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    number: PropTypes.string,
    title: PropTypes.string.isRequired,
    university: PropTypes.string,
  }).isRequired,
  last: PropTypes.bool,
  color: PropTypes.string,
};

Course.defaultProps = {
  last: false,
  color: null,
};

export default Course;
