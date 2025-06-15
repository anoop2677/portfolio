import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from '@mui/material';
import { commonStyles } from '../../styles/theme';

/**
 * PageContainer component - A standardized container for all pages
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The content of the page
 * @param {string} props.id - Optional ID for the container
 * @param {Object} props.sx - Additional styles to apply to the container
 * @returns {React.ReactElement} The PageContainer component
 */
const PageContainer = ({ children, id, sx = {} }) => (
  <Paper 
    elevation={0} 
    sx={{ 
      ...commonStyles.pageContainer,
      ...sx
    }}
    id={id}
  >
    {children}
  </Paper>
);

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  sx: PropTypes.object
};

export default PageContainer;