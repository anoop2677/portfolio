import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box,
  useMediaQuery,
  useTheme,
  Tooltip
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import DescriptionIcon from '@mui/icons-material/Description';
import CodeIcon from '@mui/icons-material/Code';
import BarChartIcon from '@mui/icons-material/BarChart';
import EmailIcon from '@mui/icons-material/Email';

import Hamburger from './Hamburger';
import routes from '../../data/routes';

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = () => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Helper function to get the icon component based on the icon name
  const getIconComponent = (iconName) => {
    switch (iconName) {
      case 'Person': return <PersonIcon />;
      case 'Description': return <DescriptionIcon />;
      case 'Code': return <CodeIcon />;
      case 'BarChart': return <BarChartIcon />;
      case 'Email': return <EmailIcon />;
      default: return null;
    }
  };

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ mb: 2 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {!isMobile ? (
          <Box sx={{ display: 'flex' }}>
            {routes.map((route) => (
              <Tooltip 
                key={route.label} 
                title={route.description || ''} 
                arrow
                placement="bottom"
              >
                <Button 
                  component={Link} 
                  to={route.path}
                  color="inherit"
                  sx={{ 
                    mx: 1,
                    fontWeight: location.pathname === route.path ? 'bold' : 'normal',
                    borderBottom: location.pathname === route.path ? `2px solid ${route.color || 'currentColor'}` : 'none',
                    borderRadius: 0,
                    color: location.pathname === route.path ? route.color : 'inherit',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    ...(route.highlight && {
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: route.color || '#3498db',
                      }
                    }),
                    '&:hover': {
                      backgroundColor: 'transparent',
                      borderBottom: `2px solid ${route.color || 'currentColor'}`,
                      transform: 'translateY(-2px)',
                    }
                  }}
                  startIcon={route.icon ? getIconComponent(route.icon) : null}
                >
                  {route.label}
                </Button>
              </Tooltip>
            ))}
          </Box>
        ) : (
          <Hamburger />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
