import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { 
  Typography, 
  Box, 
  Divider 
} from '@mui/material';

/**
 * PageHeader component - A reusable header for all pages
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - The title of the page
 * @param {string} props.path - The path to link to when clicking the title
 * @param {string} props.subtitle - Optional subtitle text
 * @param {boolean} props.showDivider - Whether to show a divider below the header
 * @param {React.ReactNode} props.actions - Optional actions to display below the title
 * @returns {React.ReactElement} The PageHeader component
 */
const PageHeader = ({ title, path, subtitle, showDivider = true, actions }) => (
  <>
    <Box sx={{ mb: 4 }}>
      <Typography 
        variant="h4" 
        component="h1" 
        gutterBottom 
        data-testid="heading"
        sx={{ fontWeight: 'bold' }}
      >
        <Link to={path} style={{ textDecoration: 'none', color: 'inherit' }}>
          {title}
        </Link>
      </Typography>
      
      {subtitle && (
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {subtitle}
        </Typography>
      )}
      
      {actions && (
        <Box sx={{ mt: 2 }}>
          {actions}
        </Box>
      )}
    </Box>
    
    {showDivider && <Divider sx={{ mb: 3 }} />}
  </>
);

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  showDivider: PropTypes.bool,
  actions: PropTypes.node
};

export default PageHeader;