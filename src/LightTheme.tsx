import { createTheme } from '@mui/material';

export const LightTheme = createTheme({
    palette: {
      primary: {
        main: '#2f3ced',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#ffffff',
        contrastText: '#808191',
      },
      info: {
        main:  '#FF754C',
        contrastText: '#ffffff',
      },
      background: {
        default: "#fdfdfd",
        paper: '#f5fbff'
      },
      text: {
        primary: '#11142D',
        secondary: '#121212'
      }
      // success: {
      //   main: '#ddedff',
      //   contrastText: '#121212'
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
