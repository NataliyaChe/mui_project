import { ReactComponent as Bell } from '../images/icons/bell.svg';
import { Paper, Box, Avatar, Badge, SvgIcon } from '@mui/material';


export function Notification() {
    return (
        <Box className='home' sx={{p: 20, width: 1183, bgcolor: '#E6E6FA', zIndex: 'tooltip'}}>
            <Badge badgeContent={4} color="primary" >
                <Avatar alt="Toda D" src="/images/avatar.png" >
                    <SvgIcon component={Bell} sx={{fill: 'none'}} inheritViewBox />
                </Avatar>
            </Badge>
        </Box>
    )
}