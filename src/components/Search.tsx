import { Paper, InputBase, IconButton, SvgIcon } from '@mui/material';
import { ReactComponent as SearchIcon } from '../images/SearchIcon.svg';

export function Search() {
    return (
        <Paper component="form"
            sx={{ m: '64px 0 100px 39px', height: 24, width: 88, display: 'flex', alignItems: 'center', p: 0, bgcolor: 'secondary.main'}} elevation={0}>
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SvgIcon component={SearchIcon} inheritViewBox sx={{fill: 'primary.contrastText', width: 20, height: 20}}/>
            </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search', fontFamily: 'Inter', fontSize: 14, fontWeight: 600, color: 'primary.contrastText'}}
            />
            
        </Paper>
    )
}