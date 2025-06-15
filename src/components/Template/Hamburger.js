import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Divider,
  Box,
  Tooltip,
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import DescriptionIcon from '@mui/icons-material/Description';
import CodeIcon from '@mui/icons-material/Code';
import BarChartIcon from '@mui/icons-material/BarChart';
import EmailIcon from '@mui/icons-material/Email';
import routes from '../../data/routes';

const Hamburger = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

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

  const toggleDrawer = (isOpen) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpen(isOpen);
  };

  return (
    <>
      <IconButton
        edge="end"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
        size="large"
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
          <List sx={{ pt: 1 }}>
            {routes.map((route) => (
              <ListItem 
                key={route.label} 
                disablePadding
                sx={{ 
                  position: 'relative',
                  ...(route.highlight && {
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '4px',
                      height: '60%',
                      backgroundColor: route.color || '#3498db',
                      borderRadius: '0 4px 4px 0',
                      opacity: location.pathname === route.path ? 1 : 0.5,
                    }
                  })
                }}
              >
                <ListItemButton
                  component={Link}
                  to={route.path}
                  selected={location.pathname === route.path}
                  sx={{
                    py: 1.5,
                    pl: 2,
                    transition: 'all 0.2s ease',
                    ...(location.pathname === route.path && {
                      backgroundColor: `${route.color}15` || 'rgba(0, 0, 0, 0.04)',
                      borderRight: `3px solid ${route.color || '#3498db'}`,
                    }),
                    '&:hover': {
                      backgroundColor: `${route.color}10` || 'rgba(0, 0, 0, 0.04)',
                    }
                  }}
                >
                  {route.icon && (
                    <ListItemIcon sx={{ 
                      color: location.pathname === route.path ? route.color : 'inherit',
                      minWidth: '40px'
                    }}>
                      {getIconComponent(route.icon)}
                    </ListItemIcon>
                  )}
                  <ListItemText 
                    primary={route.label} 
                    secondary={route.description}
                    primaryTypographyProps={{
                      variant: 'body1',
                      fontWeight: location.pathname === route.path ? 'bold' : 'normal',
                      color: location.pathname === route.path ? route.color : 'inherit',
                    }}
                    secondaryTypographyProps={{
                      variant: 'caption',
                      sx: { 
                        opacity: 0.7,
                        display: { xs: 'none', sm: 'block' }
                      }
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Hamburger;
