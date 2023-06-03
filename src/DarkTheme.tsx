import { createTheme } from '@mui/material';

export const DarkTheme = createTheme({
    components: {
      MuiListItemButton: {
        styleOverrides: {
          root: {  
            '&.Mui-selected': {
              backgroundColor: '#3F8CFF',
              '&:hover': {
                backgroundColor: '#3F8CFF',
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
      }
    },
    palette: {
      // primary: {
      //   main: '#1a1a1a',
      //   contrastText: '#808191',
      // },
      // secondary: {
      //   main: '#1f1f1f',
      //   contrastText: '#ffffff',
      // },
      primary: {
        main: '#3F8CFF',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#242731',
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
      // warning: {
      //   main: '#242731',
      //   contrastText: '#ffffff',
      // },
      // success: {
      //   main: '#6c5dd3',
      //   contrastText: '#ffffff',
      // },
      // error: {
      //   main:  '#FF754C'
      // }
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
        fontWeight: 600,
        fontFamily: 'Poppins',
      },
      h4: {
        fontSize: 24,
        fontWeight: 500,
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
      }
    }
  })
