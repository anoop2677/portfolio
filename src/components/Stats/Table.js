import React from 'react';
import PropTypes from 'prop-types';
import { 
  Table as MuiTable, 
  TableBody,
  TableContainer,
  Paper,
  Box,
  useTheme,
  Fade,
  Typography
} from '@mui/material';

import TableRow from './TableRow';

const Table = ({ data, color }) => {
  const theme = useTheme();
  // Use the provided color or fall back to the secondary color from theme
  const sectionColor = color || theme.palette.secondary.main || '#9b59b6';

  return (
    <Paper 
      elevation={2} 
      sx={{ 
        borderRadius: 2,
        overflow: 'hidden',
        mb: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        boxShadow: `0 8px 16px ${sectionColor}10`,
        position: 'relative',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: `0 12px 20px ${sectionColor}20`
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '5px',
          height: '100%',
          backgroundColor: sectionColor,
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
          backgroundColor: `${sectionColor}30`,
          borderRadius: '4px',
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: `${sectionColor}10`,
          borderRadius: '4px',
        }
      }}>
        <MuiTable stickyHeader>
          <TableBody>
            {data.map((pair, index) => (
              <Fade 
                key={pair.label} 
                in={true} 
                timeout={500 + (index * 200)}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Box component="div">
                  <TableRow
                    format={pair.format}
                    label={pair.label}
                    link={pair.link}
                    value={pair.value}
                    color={sectionColor}
                    index={index}
                  />
                </Box>
              </Fade>
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
    </Paper>
  );
};

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    format: PropTypes.func,
    label: PropTypes.string.isRequired,
    link: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.number,
      PropTypes.string,
    ]),
  })).isRequired,
  color: PropTypes.string,
};

Table.defaultProps = {
  color: null,
};

export default Table;
