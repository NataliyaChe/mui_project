// import './App.scss';
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme, Divider, Box } from '@mui/material';
import { Settings } from './pages/Settings'

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#2f3ced'
      }
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
      },
      h6: {
        fontSize: 16,
        fontWeight: 600,
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
      },
      body2: {
        fontSize: 12,
        fontWeight: 600,
      },
      button: {
        fontSize: 14,
        fontWeight: 600,
      },

    }
  })

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
          <Navbar />
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/settings' element={ <Settings /> } />
          </Routes>
          <Divider orientation="vertical" />
        
      </div>
    </ThemeProvider>
  );
}

export default App;
