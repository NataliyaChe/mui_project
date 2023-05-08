import { Paper, InputBase, IconButton, SvgIcon, Button, Typography} from '@mui/material';
import { ReactComponent as SearchIcon } from '../images/SearchIcon.svg';

export function Search() {
    return (
        <Paper component="form"
            sx={{ m: '64px 0 100px 39px', height: 24, width: 88, display: 'flex', alignItems: 'center' }}>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SvgIcon component={Search} inheritViewBox sx={{fill: 'none', width: 8, height: 4, m: 0, p: 0}}/>
            </IconButton>
            
        </Paper>
    )
}