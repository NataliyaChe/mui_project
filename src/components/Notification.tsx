import React from 'react';
import { useState } from 'react';
import { ReactComponent as Bell } from '../images/icons/bell.svg';
import { Box, Badge, SvgIcon, Popover, IconButton, Typography } from '@mui/material';
import { useTheme } from '@mui/material';

export function Notification() {
    const theme = useTheme();
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
            <IconButton aria-describedby={id} onClick={handleClick} sx={{boxShadow: 3, bgcolor: 'secondary.main'}}>
                <Badge badgeContent={4} color='info' sx={{ bgcolor: 'transparent'}}>
                    <SvgIcon component={Bell} 
                    sx={{fill: 'none', stroke: theme.palette.text.primary}} 
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
                <Typography sx={{ p: 2, color: 'secondary.contrastText'}} variant='h6'>
                    Notifications:
                </Typography>
            </Popover>
        </Box>
    )
}