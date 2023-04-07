import type { ThemeOptions } from '@mui/material'

// Custom theme: Colors
const themeColors = {
  color: {
    main: '#F96A2D',
    bg: '#031D2E',
    textLight: '#fff',
  },
} as const

const lightThemeOptions: ThemeOptions = {
  ...themeColors,
  typography: {
    fontFamily: ['Raleway', 'sans-serif'].join(','),
    h1: {
      fontSize: '2.5rem',
      lineHeight: '3.75rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.5625rem',
      lineHeight: '2.375rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.375rem',
      lineHeight: '2rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.25rem',
      lineHeight: '1.875rem',
      fontWeight: 700,
    },
  },
  palette: {
    primary: {
      main: themeColors.color.main,
    },
    secondary: {
      main: '#6F49FD',
    },
    error: {
      main: '#EB5757',
    },
    background: {
      default: themeColors.color.bg,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '8px 25px',
          borderRadius: '9999px;',
          color: themeColors.color.textLight,
          fontSize: '1rem',
          textTransform: 'capitalize',
          fontWeight: 600,
          lineHeight: 1.875,
        },
        sizeLarge: {
          padding: '15px 25px',
        },
        sizeSmall: {
          fontSize: '0.875rem',
          padding: '6px 18px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '9999px;',
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          color: themeColors.color.textLight,
          '& fieldset': {
            borderColor: '#DDE4EE',
          },
          '&:hover fieldset': {
            borderColor: `${themeColors.color.main} !important`,
          },
        },
        input: {
          padding: '12.5px 14px',
          fontWeight: 500,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: themeColors.color.textLight,
        },
      },
    },
  },
}

export default lightThemeOptions
