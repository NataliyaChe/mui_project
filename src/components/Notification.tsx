import { useState } from 'react';
import { ReactComponent as Bell } from '../images/icons/bell.svg';
import { Box, Badge, SvgIcon, Popover, IconButton, Typography } from '@mui/material';


export function Notification() {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Box sx={{ bgcolor: 'transparent', position: 'absolute', top: 48, right: 72, }}>
            <IconButton aria-describedby={id} onClick={handleClick} sx={{boxShadow: 3, bgcolor: 'warning.main'}}>
                <Badge badgeContent={4} color='error' sx={{ bgcolor: 'warning.main'}} >
                    <SvgIcon component={Bell} 
                    sx={{fill: 'none', stroke: '#000000'}} 
                    // sx={{color: 'transparent', stroke: '#000000'}} 
                    // fill="none"
                    inheritViewBox />
                </Badge>
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                sx={{mt: '18px', ml: '-90px'}}>
                <Typography sx={{ p: 2, color: 'primary.contrastText',  }} variant='h6'>
                    Notifications:
                </Typography>
            </Popover>
        </Box>
    )
}