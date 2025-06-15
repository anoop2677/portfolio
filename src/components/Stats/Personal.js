import React from 'react';
import { 
  Typography, 
  Box, 
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Link,
  useTheme,
  Fade,
  Grid
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CodeIcon from '@mui/icons-material/Code';
import CoffeeIcon from '@mui/icons-material/Coffee';
import GitHubIcon from '@mui/icons-material/GitHub';
import SchoolIcon from '@mui/icons-material/School';
import data from '../../data/stats/personal';

const PersonalStats = () => {
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main || '#9b59b6';

  // Function to get the appropriate icon based on the key/label
  const getIcon = (key, label) => {
    if (key === 'age' || label.toLowerCase().includes('time')) {
      return <AccessTimeIcon fontSize="small" sx={{ color: secondaryColor }} />;
    }
    if (key === 'location' || label.toLowerCase().includes('location')) {
      return <LocationOnIcon fontSize="small" sx={{ color: secondaryColor }} />;
    }
    if (key === 'languages' || label.toLowerCase().includes('programming')) {
      return <CodeIcon fontSize="small" sx={{ color: secondaryColor }} />;
    }
    if (key === 'coffee' || label.toLowerCase().includes('coffee')) {
      return <CoffeeIcon fontSize="small" sx={{ color: secondaryColor }} />;
    }
    if (key === 'github' || label.toLowerCase().includes('github')) {
      return <GitHubIcon fontSize="small" sx={{ color: secondaryColor }} />;
    }
    if (key === 'experience' || label.toLowerCase().includes('experience')) {
      return <SchoolIcon fontSize="small" sx={{ color: secondaryColor }} />;
    }
    if (key === 'coding' || label.toLowerCase().includes('coding')) {
      return <CodeIcon fontSize="small" sx={{ color: secondaryColor }} />;
    }
    return <InfoIcon fontSize="small" sx={{ color: secondaryColor }} />;
  };

  return (
    <Box sx={{ mb: 6 }}>
      <Fade in={true} timeout={800}>
        <Box>
          <Typography 
            variant="h5" 
            component="h2" 
            sx={{ 
              fontWeight: 'bold',
              mb: 1,
              color: 'text.primary',
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: 0,
                width: '40px',
                height: '3px',
                backgroundColor: secondaryColor,
                borderRadius: '3px'
              }
            }}
          >
            Personal Statistics
          </Typography>

          <Typography 
            variant="body1" 
            sx={{ 
              mb: 3,
              mt: 3,
              color: 'text.secondary',
              maxWidth: '800px',
              lineHeight: 1.6,
              fontSize: '0.95rem',
              pl: 2,
              borderLeft: `3px solid ${secondaryColor}20`,
              '& strong': {
                color: secondaryColor,
                fontWeight: 600
              }
            }}
          >
            Here are some <strong>statistics about me</strong> that are automatically updated in real-time.
          </Typography>

          <Paper 
            elevation={2} 
            sx={{ 
              borderRadius: 2,
              overflow: 'hidden',
              mb: 3,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              boxShadow: `0 8px 16px ${secondaryColor}10`,
              position: 'relative',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: `0 12px 20px ${secondaryColor}20`
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '5px',
                height: '100%',
                backgroundColor: secondaryColor,
                borderRadius: '5px 0 0 5px'
              }
            }}
          >
            <Typography 
              variant="caption" 
              sx={{ 
                display: 'block', 
                textAlign: 'right', 
                pr: 2, 
                pt: 1.5, 
                color: 'text.secondary',
                fontStyle: 'italic',
                opacity: 0.7
              }}
            >
              Updated in real-time
            </Typography>

            <TableContainer sx={{ 
              maxHeight: '100%',
              '&::-webkit-scrollbar': {
                width: '8px',
                height: '8px',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: `${secondaryColor}30`,
                borderRadius: '4px',
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: `${secondaryColor}10`,
                borderRadius: '4px',
              }
            }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell 
                      sx={{ 
                        fontWeight: 'bold',
                        width: '40%',
                        borderBottom: `2px solid ${secondaryColor}50`,
                        py: 2,
                        px: 3,
                        background: `linear-gradient(135deg, ${secondaryColor}20, ${primaryColor}15)`,
                        textAlign: 'right',
                        color: 'text.primary',
                        position: 'relative',
                        overflow: 'hidden',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)',
                          transform: 'translateX(-100%)',
                          transition: 'transform 0.5s ease',
                        },
                        '&:hover::after': {
                          transform: 'translateX(100%)',
                        }
                      }}
                    >
                      Information
                    </TableCell>
                    <TableCell 
                      sx={{ 
                        fontWeight: 'bold',
                        width: '60%',
                        borderBottom: `2px solid ${secondaryColor}50`,
                        py: 2,
                        px: 3,
                        background: `linear-gradient(135deg, ${primaryColor}15, ${secondaryColor}20)`,
                        color: 'text.primary',
                        position: 'relative',
                        overflow: 'hidden',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)',
                          transform: 'translateX(-100%)',
                          transition: 'transform 0.5s ease',
                        },
                        '&:hover::after': {
                          transform: 'translateX(100%)',
                        }
                      }}
                    >
                      Value
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((item, index) => (
                    <Fade 
                      key={item.key} 
                      in={true} 
                      timeout={500 + (index * 200)}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <TableRow 
                        hover
                        sx={{ 
                          transition: 'all 0.3s ease',
                          background: index % 2 === 0 
                            ? `linear-gradient(to right, ${secondaryColor}15, ${primaryColor}15)` 
                            : `linear-gradient(to right, ${primaryColor}10, ${secondaryColor}10)`,
                          borderBottom: `1px solid ${secondaryColor}20`,
                          borderLeft: `3px solid ${index % 3 === 0 ? primaryColor : index % 3 === 1 ? secondaryColor : '#4caf50'}`,
                          '&:hover': { 
                            background: `linear-gradient(to right, ${secondaryColor}25, ${primaryColor}25)`,
                            transform: 'translateX(5px)',
                            boxShadow: `0 2px 8px ${secondaryColor}30`
                          }
                        }}
                      >
                        <TableCell 
                          component="th" 
                          scope="row"
                          sx={{ 
                            fontWeight: 600,
                            py: 2.5,
                            px: 3,
                            borderRight: `2px solid ${secondaryColor}30`,
                            textAlign: 'right',
                            verticalAlign: 'middle',
                            position: 'relative',
                            '&::after': {
                              content: '""',
                              position: 'absolute',
                              top: '50%',
                              right: 0,
                              transform: 'translateY(-50%)',
                              width: '10px',
                              height: '10px',
                              borderRadius: '50%',
                              backgroundColor: secondaryColor,
                              opacity: 0.2
                            }
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                            <Typography 
                              variant="body1" 
                              sx={{ 
                                fontWeight: 600,
                                color: 'text.primary',
                                mr: 1
                              }}
                            >
                              {item.label}
                            </Typography>
                            {getIcon(item.key, item.label)}
                          </Box>
                        </TableCell>
                        <TableCell 
                          sx={{ 
                            py: 2.5,
                            px: 3,
                            verticalAlign: 'middle'
                          }}
                        >
                          {item.link ? (
                                <Link 
                                  href={item.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  sx={{ 
                                    color: secondaryColor,
                                    textDecoration: 'none',
                                    fontWeight: 500,
                                    transition: 'all 0.2s',
                                    display: 'inline-block',
                                    '&:hover': { 
                                      textDecoration: 'underline',
                                      color: primaryColor
                                    }
                                  }}
                                >
                                  {item.value}
                                </Link>
                              ) : (
                                <Typography 
                                  variant="body1" 
                                  sx={{ 
                                    fontFamily: (item.key === 'age' || item.key === 'coding') ? 'monospace' : 'inherit',
                                    fontWeight: 500,
                                    color: 'text.primary',
                                    fontSize: (item.key === 'age' || item.key === 'coding') ? '0.9rem' : '1rem',
                                    wordBreak: 'break-word',
                                    lineHeight: 1.5
                                  }}
                                >
                                  {item.value}
                                </Typography>
                              )}
                        </TableCell>
                      </TableRow>
                    </Fade>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Box>
      </Fade>
    </Box>
  );
};

export default PersonalStats;
