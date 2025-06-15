import React from 'react';
import PropTypes from 'prop-types';
import { 
  TableRow as MuiTableRow, 
  TableCell, 
  Link as MuiLink,
  Box,
  Typography,
  useTheme,
  Grid
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const TableRow = ({
  label, link, value, format, color, index,
}) => {
  const theme = useTheme();
  // Use the provided color or fall back to the secondary color from theme
  const rowColor = color || theme.palette.secondary.main || '#9b59b6';

  // Determine which icon to use based on the label
  const getIcon = () => {
    if (label.toLowerCase().includes('age')) {
      return <AccessTimeIcon fontSize="small" sx={{ color: rowColor }} />;
    }
    if (label.toLowerCase().includes('city') || label.toLowerCase().includes('location')) {
      return <LocationOnIcon fontSize="small" sx={{ color: rowColor }} />;
    }
    return <InfoIcon fontSize="small" sx={{ color: rowColor }} />;
  };

  // Common dot styling for both regular values and links
  const dotStyle = {
    content: '""',
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: rowColor,
    display: 'inline-block',
    marginRight: '12px',
    opacity: 0.8
  };

  return (
    <MuiTableRow 
      sx={{ 
        '&:last-child td, &:last-child th': { border: 0 },
        transition: 'all 0.3s ease',
        backgroundColor: index % 2 === 0 ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.8)',
        borderBottom: `1px solid ${rowColor}15`,
        '&:hover': { 
          backgroundColor: `${rowColor}08`,
          transform: 'translateX(5px)'
        }
      }}
    >
      <TableCell 
        component="th" 
        scope="row" 
        sx={{ 
          width: '40%', 
          fontWeight: 600,
          py: 2.5,
          px: 3,
          borderRight: `1px solid ${rowColor}20`,
          textAlign: 'right',
          verticalAlign: 'middle'
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
            {label}
          </Typography>
          {getIcon()}
        </Box>
      </TableCell>
      <TableCell 
        sx={{ 
          width: '60%',
          py: 2.5,
          px: 3,
          verticalAlign: 'middle'
        }}
      >
        <Grid container spacing={0} alignItems="center">
          <Grid item xs="auto">
            <Box 
              sx={{ 
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: rowColor,
                opacity: 0.8,
                mr: 1.5
              }} 
            />
          </Grid>
          <Grid item xs>
            {link ? (
              <MuiLink 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                sx={{ 
                  color: rowColor,
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'all 0.2s',
                  wordBreak: 'break-word',
                  display: 'inline-block',
                  '&:hover': { 
                    textDecoration: 'underline',
                    color: theme.palette.primary.dark
                  }
                }}
              >
                {format(value)}
              </MuiLink>
            ) : (
              <Typography 
                variant="body1" 
                sx={{ 
                  fontFamily: label.toLowerCase().includes('age') || label.toLowerCase().includes('coding') ? 'monospace' : 'inherit',
                  fontWeight: 500,
                  color: 'text.primary',
                  fontSize: label.toLowerCase().includes('age') || label.toLowerCase().includes('coding') ? '0.9rem' : '1rem',
                  wordBreak: 'break-word',
                  lineHeight: 1.5
                }}
              >
                {format(value)}
              </Typography>
            )}
          </Grid>
        </Grid>
      </TableCell>
    </MuiTableRow>
  );
};

TableRow.propTypes = {
  format: PropTypes.func,
  label: PropTypes.string.isRequired,
  link: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.number,
    PropTypes.string,
  ]),
  color: PropTypes.string,
  index: PropTypes.number,
};

TableRow.defaultProps = {
  format: (x) => x,
  link: null,
  value: null,
  color: null,
  index: 0,
};

export default TableRow;
