import React from 'react';
import PropTypes from 'prop-types';
import { 
  Typography, 
  Box, 
  Card, 
  CardContent, 
  Link, 
  Chip,
  useTheme 
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import BusinessIcon from '@mui/icons-material/Business';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const Degree = ({ data, index = 0, color }) => {
  const theme = useTheme();
  // Use the provided color, or a default color based on index
  const degreeColor = color || theme.palette.primary.main;

  return (
    <Card 
      elevation={2} 
      sx={{ 
        mb: 4, 
        borderRadius: 2,
        transition: 'all 0.3s',
        position: 'relative',
        overflow: 'visible',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '5px',
          backgroundColor: degreeColor,
          borderRadius: '2px 2px 0 0'
        }
      }}
    >
      <CardContent sx={{ p: 3 }}>
        {/* Degree header with icon */}
        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              backgroundColor: `${degreeColor}15`,
              color: degreeColor,
              width: 40,
              height: 40,
              borderRadius: '50%',
              mr: 2,
              flexShrink: 0
            }}
          >
            <SchoolIcon />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography 
              variant="h6" 
              component="h3" 
              sx={{ 
                fontWeight: 'bold',
                color: 'text.primary',
                mb: 0.5
              }}
            >
              {data.degree}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <BusinessIcon sx={{ color: 'text.secondary', mr: 1, fontSize: '0.9rem' }} />
              <Typography 
                variant="body2" 
                sx={{ 
                  color: 'text.secondary',
                  fontWeight: 500
                }}
              >
                <Link 
                  href={data.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  sx={{ 
                    color: degreeColor,
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                    '&:hover': { 
                      textDecoration: 'underline',
                      color: theme.palette.primary.dark
                    }
                  }}
                >
                  {data.school}
                </Link>
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CalendarTodayIcon sx={{ color: 'text.secondary', mr: 1, fontSize: '0.9rem' }} />
              <Chip 
                label={data.year} 
                size="small" 
                sx={{ 
                  fontWeight: 'medium',
                  backgroundColor: `${degreeColor}15`,
                  color: degreeColor,
                  borderRadius: '16px',
                  height: 24
                }} 
              />
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

Degree.propTypes = {
  data: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number,
  color: PropTypes.string,
};

Degree.defaultProps = {
  index: 0,
  color: null,
};

export default Degree;
