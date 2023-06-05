import { createTheme } from '@mui/material';

export const DarkTheme = createTheme({
    palette: {
      primary: {
        main: '#3F8CFF',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#242731',
        contrastText: '#808191',
      },
      info: {
        main:  '#FF754C',
        contrastText: '#ffffff',
      },
      background: {
        default: "#1a1a1a",
        paper: '#1f1f1f'
      },
      text: {
        primary: '#ffffff',
        secondary: '#ffffff'
      }
      // success: {
      //   main: '#6c5dd3',
      //   contrastText: '#ffffff',
      // },
    },
    typography: {
      h1: {
        fontSize: 40,
        fontWeight: 600,
        fontFamily: 'Poppins',
      },
      h2: {
        fontSize: 32,
        fontWeight: 600,
        fontFamily: 'Poppins',
      },
      h3: {
        fontSize: 24,
        fontFamily: 'Poppins',
      },
      h5: {
        fontSize: 22,
        fontWeight: 700,
        fontFamily: 'Inter',
      },
      h6: {
        fontSize: 16,
        fontWeight: 600,
        fontFamily: 'Inter',
      },
      subtitle1: {
        fontSize: 14,
        fontFamily: 'Inter',
      },
      body1: {
        fontSize: 12,
        fontFamily: 'Open Sans',
      },
      body2: {
        fontSize: 12,
        fontWeight: 600,
        fontFamily: 'Inter',
      },
      caption: {
        fontSize: 13,
        fontWeight: 600,
        fontFamily: 'Inter',
      }
    },
    components: {
      MuiListItemButton: {
        styleOverrides: {
          root: {  
            '&.Mui-selected': {
              backgroundColor: '#3F8CFF',
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
      MuiInputBase: {
        styleOverrides: {
          input: {
            '&::placeholder':  {
              fontFamily: 'Inter', 
              fontSize: 14, 
              fontWeight: 600,
              color: '#808191'
            }
          }
        }
      }
    },
  })
