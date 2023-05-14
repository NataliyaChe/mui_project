import { useState } from 'react';
import { ReactComponent as Bell } from '../images/icons/bell.svg';
import { Paper, Box, Avatar, Badge, SvgIcon, Popover, IconButton, Typography } from '@mui/material';


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
        // <Box className='home' sx={{p: 20, width: 1183, bgcolor: '#E6E6FA', position: 'absolute'}}>
            // <Badge badgeContent={4} color='info' sx={{ bgcolor: 'transparent', position: 'absolute', top: 48, right: 72, color: '#FFFFFF'}} >
            //     <Avatar alt="Toda D" src="/images/avatar.png" sx={{bgcolor: '#FFFFFF', boxShadow: 3}} >
            //         <SvgIcon component={Bell} sx={{fill: 'none'}} inheritViewBox />
            //     </Avatar>
            // </Badge>
        // </Box>
        <Box sx={{ bgcolor: 'transparent', position: 'absolute', top: 48, right: 72, color: '#FFFFFF'}}>
            <IconButton aria-describedby={id} onClick={handleClick} sx={{boxShadow: 3}}>
                <Badge badgeContent={4} color='info' sx={{ bgcolor: 'transparent', color: '#FFFFFF'}} >
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