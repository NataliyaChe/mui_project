import { useState } from 'react';
import Switch from '@mui/material/Switch';
import { LightTheme } from '../LightTheme';
import { DarkTheme } from '../DarkTheme';

interface ThemeSwitcherCompProps {
    theme: {}
    updateTheme: any
}

export function ThemeSwitcherComp({theme, updateTheme}: ThemeSwitcherCompProps) {
    console.log('switch props', theme);
    const [currentTheme, setCurrentTheme] = useState(theme);
    function changeTheme(event: any) {
        
        // theme == LightTheme ? setCurrentTheme(DarkTheme) : setCurrentTheme(LightTheme);
        // theme == LightTheme ? console.log('dark') : console.log('light');
        setCurrentTheme(DarkTheme);
    }
    return (
        <Switch
            color='error'
            inputProps={{ 'aria-label': 'theme switch' }} 
            sx={{ position: 'absolute', top: 48, right: 132, bgcolor: 'error.main'}}
            onClick={changeTheme}
            />
    )
}