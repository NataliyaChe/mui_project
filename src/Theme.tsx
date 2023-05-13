import { createTheme } from '@mui/material';

export const theme = createTheme({
    components: {
      MuiListItemButton: {
        styleOverrides: {
          root: {  
            '&.Mui-selected': {
              backgroundColor: '#2f3ced',
              color: 'error'
            },
          },
        },
      },
      MuiListItemText: {
        styleOverrides: {
          root: {  
            '&.Mui-selected': {
              color: '#ffffff',
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
      primary: {
        main: '#2f3ced'
      },
      info: {
        main: '#FF754C'
      }
    },
    typography: {
      h1: {
        fontSize: 40,
        fontWeight: 600,
        fontFamily: 'Poppins',
        color: '#11142D'
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
        color: '#11142D'
      },
      subtitle1: {
        fontSize: 14,
        fontWeight: 500,
      },
      subtitle2: {
        fontSize: 13,
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
      button: {
        fontSize: 14,
        fontWeight: 600,
      },
      caption: {
        fontSize: 13,
        fontWeight: 400,
        fontFamily: 'Inter',
        color: '#FFFFFF'
      }
    }
  })
