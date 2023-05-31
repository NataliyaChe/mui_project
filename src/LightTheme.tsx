import { createTheme } from '@mui/material';

export const LightTheme = createTheme({
    palette: {
      primary: {
        main: '#fdfdfd',
        contrastText: '#808191',
      },
      secondary: {
        main: '#f5fbff',
        contrastText: '#11142D',
      },
      info: {
        main: '#2f3ced',
        contrastText: '#ffffff',
      },
      warning: {
        main: '#ffffff',
        contrastText: '#121212'
      },
      success: {
        main: '#ddedff',
        contrastText: '#121212'
      },
      error: {
        main:  '#FF754C'
      }
    },
    typography: {
      h1: {
        fontSize: 40,
        fontWeight: 600,
        fontFamily: 'Poppins',
        color: '#2d112b'
      },
      h2: {
        fontSize: 32,
        fontWeight: 600,
        fontFamily: 'Poppins',
        color: '#11142D'
      },
      h3: {
        fontSize: 24,
        fontWeight: 600,
        fontFamily: 'Poppins',
        color: '#11142D'
      },
      h4: {
        fontSize: 24,
        fontWeight: 500,
      },
      h5: {
        fontSize: 22,
        fontWeight: 700,
        fontFamily: 'Inter',
        color: '#121212'
      },
      h6: {
        fontSize: 16,
        fontWeight: 600,
        fontFamily: 'Inter',
        color: 'secondary.contrastText'
      },
      subtitle1: {
        fontSize: 14,
        fontWeight: 500,
      },
      subtitle2: {
        fontSize: 14,
        fontWeight: 600,
      },
      body1: {
        fontSize: 12,
        fontFamily: 'Open-Sans',
        color: '#808080'
      },
      body2: {
        fontSize: 12,
        fontWeight: 600,
        fontFamily: 'Inter',
        color: '#808191'
      },
      caption: {
        fontSize: 13,
        fontWeight: 400,
        fontFamily: 'Inter',
        color: '#FFFFFF'
      }
    },
    components: {
      MuiListItemButton: {
        styleOverrides: {
          root: {  
            '&.Mui-selected': {
              backgroundColor: '#2f3ced',
              '&:hover': {
                backgroundColor: '#2f3ced',
              },
            },
          },
        },
      },
      MuiAccordion: {
        styleOverrides: {
          root: {
            ':before': {
              content: 'none'
            }
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {  
            '&:hover': {
              backgroundColor: '#f2eeff',
            },
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {  
            color: "info"
          },
        },
      },
    },
  })
