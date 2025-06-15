import React from 'react';
import PropTypes from 'prop-types';
import { Button, Chip, useTheme } from '@mui/material';

const CategoryButton = ({ handleClick, active, label, color }) => {
  const theme = useTheme();
  // Use the provided color or fall back to the primary color from theme
  const buttonColor = color || theme.palette.primary.main;

  // Create custom colors with transparency for the button
  const bgColor = `${buttonColor}15`; // 15% opacity
  const borderColor = `${buttonColor}40`; // 40% opacity
  const hoverBgColor = `${buttonColor}25`; // 25% opacity

  return (
    <Chip
      label={label}
      clickable
      onClick={() => handleClick(label)}
      color={active[label] ? "primary" : "default"}
      variant={active[label] ? "filled" : "outlined"}
      size="small"
      sx={{ 
        m: 0.3,
        height: 24,
        fontSize: '0.75rem',
        fontWeight: active[label] ? 'bold' : 'medium',
        backgroundColor: active[label] ? buttonColor : 'transparent',
        borderColor: active[label] ? buttonColor : borderColor,
        color: active[label] ? 'white' : buttonColor,
        transition: 'all 0.2s ease',
        '&:hover': {
          backgroundColor: active[label] ? buttonColor : bgColor,
          borderColor: buttonColor,
          transform: 'translateY(-1px)',
          boxShadow: `0 2px 4px ${bgColor}`,
        },
        '&:active': {
          transform: 'translateY(0)',
          boxShadow: 'none',
        }
      }}
    />
  );
};

CategoryButton.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  active: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired,
  color: PropTypes.string,
};

CategoryButton.defaultProps = {
  color: null,
};

export default CategoryButton;
