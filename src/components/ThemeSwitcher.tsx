import { useState } from 'react';
import Switch from '@mui/material/Switch';
import { DarkTheme } from '../DarkTheme';

interface ThemeSwitcherCompProps {
    theme: {}
}

export function ThemeSwitcherComp({theme}: ThemeSwitcherCompProps) {
    const [currentTheme, setCurrentTheme] = useState(theme);
    function changeTheme() {
        setCurrentTheme(DarkTheme);
    }

    return (
        <Switch
            color='error'
            inputProps={{ 'aria-label': 'theme switch' }} 
            sx={{ position: 'absolute', top: 48, right: 132}}
            onClick={changeTheme}/>
    )
}