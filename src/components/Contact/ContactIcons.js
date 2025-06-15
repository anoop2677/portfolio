import React from 'react';
import PropTypes from 'prop-types';
import { Box, IconButton, Tooltip } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/contact';

/**
 * ContactIcons component - Renders social media icons
 * 
 * @param {Object} props - Component props
 * @param {string} [props.size='medium'] - Size of the icons ('small', 'medium', 'large')
 * @returns {React.ReactElement} The ContactIcons component
 */
const ContactIcons = ({ size = 'medium' }) => {
  // Determine icon size based on the size prop
  const getIconSize = () => {
    switch (size) {
      case 'small':
        return { fontSize: '1rem' };
      case 'large':
        return { fontSize: '1.5rem' };
      case 'medium':
      default:
        return { fontSize: '1.2rem' };
    }
  };

  // Determine button size based on the size prop
  const getButtonSize = () => {
    switch (size) {
      case 'small':
        return { width: 36, height: 36 };
      case 'large':
        return { width: 56, height: 56 };
      case 'medium':
      default:
        return { width: 44, height: 44 };
    }
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: size === 'large' ? 3 : 2,
        flexWrap: 'wrap'
      }}
    >
      {data.map((s) => (
        <Tooltip key={s.label} title={s.label} arrow>
          <IconButton 
            aria-label={s.label}
            href={s.link}
            target={s.link.startsWith('mailto:') ? '_self' : '_blank'}
            rel="noopener noreferrer"
            color="primary"
            sx={{ 
              ...getButtonSize(),
              transition: 'all 0.3s',
              '&:hover': {
                transform: 'scale(1.1) rotate(5deg)',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
              }
            }}
          >
            <FontAwesomeIcon icon={s.icon} style={getIconSize()} />
          </IconButton>
        </Tooltip>
      ))}
    </Box>
  );
};

ContactIcons.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

ContactIcons.defaultProps = {
  size: 'medium'
};

export default ContactIcons;
