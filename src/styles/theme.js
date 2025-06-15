import { createTheme } from '@mui/material/styles';

/**
 * Application theme and common styling values
 */

// Colors
export const colors = {
  primary: '#3c78d8',
  secondary: '#555',
  background: {
    light: 'rgba(60, 120, 216, 0.03)',
    medium: 'rgba(60, 120, 216, 0.05)',
    dark: 'rgba(60, 120, 216, 0.1)'
  }
};

// Spacing
export const spacing = {
  xs: 1, // 8px
  sm: 2, // 16px
  md: 3, // 24px
  lg: 4, // 32px
  xl: 6  // 48px
};

// Border radius
export const borderRadius = {
  small: 1,
  medium: 2,
  large: 4
};

// Transitions
export const transitions = {
  hover: 'transform 0.3s, box-shadow 0.3s',
  fade: 'opacity 0.3s ease'
};

// Shadows
export const shadows = {
  card: '0 2px 8px rgba(0,0,0,0.1)',
  cardHover: '0 8px 16px rgba(0,0,0,0.1)',
  button: '0 2px 4px rgba(0,0,0,0.1)'
};

// Common styles
export const commonStyles = {
  card: {
    borderRadius: borderRadius.medium,
    transition: transitions.hover,
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: shadows.cardHover
    }
  },
  pageContainer: {
    p: spacing.md,
    borderRadius: borderRadius.medium,
    backgroundColor: 'transparent'
  },
  sectionSpacing: {
    mb: spacing.xl
  },
  contentSpacing: {
    mb: spacing.md
  }
};

// Create and export the theme
const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h4: {
      fontWeight: 'bold'
    },
    h6: {
      fontWeight: 'medium'
    }
  },
  shape: {
    borderRadius: 8
  }
});

export default theme;