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
    h4: {
      fontSize: '1.125rem',
      fontWeight: 700,
    },
    h5: {
      fontSize: '1rem',
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
    MuiTypography: {
      styleOverrides: {
        root: {
          lineHeight: 1.25,
        },
        body2: {
          lineHeight: '20px',
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
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '1288px',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: themeColors.color.textLight,
          fontWeight: 500,
          cursor: 'pointer',
        },
      },
    },
  },
}

export default lightThemeOptions
