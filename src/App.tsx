import { useState } from 'react';
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider, Divider, Box, Switch } from '@mui/material';
import { Settings } from './pages/Settings';
import { Notification } from './components/Notification';
import { LightTheme } from './LightTheme';
import { DarkTheme } from './DarkTheme';

function App() {
  const [theme, setTheme] = useState(LightTheme);

  function changeTheme() {
    theme === LightTheme ? setTheme(DarkTheme) : setTheme(LightTheme);
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Box sx={{borderRadius: '24px', width: 1440, display: 'flex', position: 'relative', margin: '0 auto'}}>
          <Navbar />
          <Divider orientation="vertical" />
          <Switch
            color='info'
            inputProps={{ 'aria-label': 'theme switch' }} 
            sx={{ position: 'absolute', top: 48, right: 132}}
            onClick={changeTheme}
            />
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
