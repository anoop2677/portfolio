import React from 'react';
import PropTypes from 'prop-types';
import { 
  Typography, 
  Box, 
  Card, 
  CardContent, 
  Link, 
  Chip,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';

const Job = ({ data, index = 0 }) => {
  const theme = useTheme();
  const colors = [
    theme.palette.success.main,
    theme.palette.info.main,
    theme.palette.warning.main
  ];
  const color = colors[index % colors.length];

  // Extract location from position if it contains a comma
  let location = null;
  if (data.position && data.position.includes(',')) {
    const parts = data.position.split(',');
    location = parts.slice(1).join(',').trim();
  }

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
          backgroundColor: color,
          borderRadius: '2px 2px 0 0'
        }
      }}
    >
      <CardContent sx={{ p: 3 }}>
        {/* Company and position header */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' }, 
          justifyContent: 'space-between', 
          alignItems: { xs: 'flex-start', sm: 'center' },
          mb: 2.5 
        }}>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
              <BusinessIcon sx={{ color: color, mr: 1, fontSize: '1.2rem' }} />
              <Typography 
                variant="h6" 
                component="h3" 
                sx={{ 
                  fontWeight: 'bold',
                  color: 'text.primary'
                }}
              >
                <Link 
                  href={data.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  sx={{ 
                    color: color,
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                    '&:hover': { 
                      textDecoration: 'underline',
                      color: theme.palette.primary.dark
                    }
                  }}
                >
                  {data.company}
                </Link>
              </Typography>
            </Box>

            <Typography 
              variant="subtitle1" 
              sx={{ 
                fontWeight: 500,
                color: 'text.secondary',
                ml: location ? 0 : 3.5
              }}
            >
              {location ? data.position.split(',')[0] : data.position}
            </Typography>

            {location && (
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5, ml: 3.5 }}>
                <LocationOnIcon sx={{ color: 'text.secondary', mr: 0.5, fontSize: '0.9rem' }} />
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontStyle: 'italic',
                    color: 'text.secondary'
                  }}
                >
                  {location}
                </Typography>
              </Box>
            )}
          </Box>

          <Chip 
            label={data.daterange} 
            size="small" 
            sx={{ 
              fontWeight: 'medium',
              backgroundColor: `${color}15`,
              color: color,
              borderRadius: '16px',
              mt: { xs: 1, sm: 0 }
            }} 
          />
        </Box>

        {/* Job responsibilities and achievements */}
        <List sx={{ pl: 1 }}>
          {data.points.map((point, i) => (
            <ListItem 
              key={i} 
              alignItems="flex-start" 
              sx={{ 
                px: 1, 
                py: 0.5,
                transition: 'all 0.2s',
                '&:hover': {
                  backgroundColor: `${color}05`,
                  transform: 'translateX(5px)'
                }
              }}
            >
              <ListItemIcon sx={{ minWidth: 28 }}>
                <ArrowRightIcon sx={{ color: color }} />
              </ListItemIcon>
              <ListItemText
                primary={point.title && (
                  <Typography 
                    variant="subtitle2" 
                    sx={{ 
                      fontWeight: 'bold',
                      fontStyle: 'italic',
                      mb: 0.5
                    }}
                  >
                    {point.title}
                  </Typography>
                )}
                secondary={
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'text.primary',
                      lineHeight: 1.6
                    }}
                  >
                    {point.content || point}
                  </Typography>
                }
                sx={{ m: 0 }}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

Job.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    daterange: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          title: PropTypes.string,
          content: PropTypes.string,
        }),
      ])
    ).isRequired,
  }).isRequired,
  index: PropTypes.number,
};

export default Job;
