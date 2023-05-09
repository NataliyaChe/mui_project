import { ReactComponent as Bell } from '../images/icons/bell.svg';
import { Paper, Box, Avatar, Badge, SvgIcon } from '@mui/material';


export function Notification() {
    return (
        // <Box className='home' sx={{p: 20, width: 1183, bgcolor: '#E6E6FA', position: 'absolute'}}>
            <Badge badgeContent={4} color='info' sx={{ bgcolor: 'transparent', position: 'absolute', top: 48, right: 72, color: '#FFFFFF'}} >
                <Avatar alt="Toda D" src="/images/avatar.png" sx={{bgcolor: '#FFFFFF', boxShadow: 3}} >
                    <SvgIcon component={Bell} sx={{fill: 'none'}} inheritViewBox />
                </Avatar>
            </Badge>
        // </Box>
    )
}