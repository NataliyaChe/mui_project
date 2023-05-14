import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider, Divider, Box } from '@mui/material';
import { Settings } from './pages/Settings';
import { Notification } from './components/Notification';
import { theme } from './Theme';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Box sx={{borderRadius: '24px', width: 1440, bgcolor: '#D8BFD8', display: 'flex', position: 'relative'}}>
          <Navbar />
          <Divider orientation="vertical" />
          <Notification />
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/settings' element={ <Settings /> } />
          </Routes>
          
        </Box>
          
        
      </div>
    </ThemeProvider>
  );
}

export default App;
