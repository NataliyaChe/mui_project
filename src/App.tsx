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
  console.log('state theme', theme);

function changeTheme(event: any) {
  theme === LightTheme ? setTheme(DarkTheme) : setTheme(LightTheme);
  console.log('switch theme', theme);
}

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Box sx={{borderRadius: '24px', width: 1440, bgcolor: '#D8BFD8', display: 'flex', position: 'relative', margin: '0 auto'}}>
          <Navbar />
          <Divider orientation="vertical" sx={{bgcolor: '#000000'}}/>
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
