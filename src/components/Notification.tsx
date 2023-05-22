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
        <Box sx={{ bgcolor: 'transparent', position: 'absolute', top: 48, right: 72, color: 'warning.main'}}>
            <IconButton aria-describedby={id} onClick={handleClick} sx={{boxShadow: 3, bgcolor: '#FFFFFF'}}>
                <Badge badgeContent={4} color='error' sx={{ bgcolor: '#FFFFFF', color: '#FFFFFF'}} >
                    <SvgIcon component={Bell} sx={{fill: 'none', }} inheritViewBox />
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
                <Typography sx={{ p: 2, color: '#808191',  }} variant='h6'>
                    Notifications:
                </Typography>
            </Popover>
        </Box>
    )
}