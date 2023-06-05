import { Paper, InputBase, IconButton, SvgIcon } from '@mui/material';
import { ReactComponent as SearchIcon } from '../images/SearchIcon.svg';
import { useTheme } from '@mui/material';

export function Search() {
    const theme = useTheme(); 

    return (
        <Paper component="form"
            sx={{ m: '64px 0 100px 39px', height: 24, width: 88, display: 'flex', alignItems: 'center', p: 0, bgcolor: 'background.paper'}} elevation={0}>
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SvgIcon component={SearchIcon} inheritViewBox sx={{width: 20, height: 20, stroke: theme.palette.text.primary}}/>
            </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search', fontFamily: 'Inter', fontSize: 14, fontWeight: 600, color: 'secondary.contrastText', lineHeight: '20px'}}
            />   
        </Paper>
    )
}