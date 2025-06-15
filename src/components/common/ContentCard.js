import React from 'react';
import PropTypes from 'prop-types';
import { 
  Card, 
  CardContent, 
  Typography, 
  Box 
} from '@mui/material';

/**
 * ContentCard component - A reusable card for content display
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The content of the card
 * @param {React.ReactNode} props.icon - Optional icon to display in the header
 * @param {string} props.title - Optional title for the card
 * @param {Object} props.sx - Additional styles to apply to the card
 * @param {Object} props.contentSx - Additional styles to apply to the card content
 * @param {number} props.elevation - Card elevation (shadow depth)
 * @param {React.ReactNode} props.action - Optional action component (like a button)
 * @returns {React.ReactElement} The ContentCard component
 */
const ContentCard = ({ 
  children, 
  icon, 
  title, 
  sx = {}, 
  contentSx = {}, 
  elevation = 2,
  action
}) => (
  <Card 
    elevation={elevation} 
    sx={{ 
      height: '100%',
      borderRadius: 2,
      transition: 'transform 0.3s, box-shadow 0.3s',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
      },
      ...sx
    }}
  >
    <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%', ...contentSx }}>
      {(icon || title) && (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {icon && (
              <Box sx={{ mr: 1.5, color: 'primary.main' }}>
                {icon}
              </Box>
            )}
            {title && (
              <Typography variant="h6">{title}</Typography>
            )}
          </Box>
          {action && (
            <Box>
              {action}
            </Box>
          )}
        </Box>
      )}
      {children}
    </CardContent>
  </Card>
);

ContentCard.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.node,
  title: PropTypes.string,
  sx: PropTypes.object,
  contentSx: PropTypes.object,
  elevation: PropTypes.number,
  action: PropTypes.node
};

export default ContentCard;