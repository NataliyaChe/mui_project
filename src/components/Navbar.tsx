import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link as RouterLink } from "react-router-dom";
import { Box, Typography, ListItem, ListItemButton, ListItemIcon, ListItemText, Link, Avatar, } from '@mui/material';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import { ReactComponent as Setting } from '../images/icons/Setting.svg';
import { ReactComponent as Award } from '../images/icons/award.svg';
import { ReactComponent as Course } from '../images/icons/mycourse.svg';
import { ReactComponent as Heart } from '../images/icons/heart.svg';
import { ReactComponent as Test } from '../images/icons/notepad.svg';
import { ReactComponent as Achieve } from '../images/icons/achieve.svg';
import { ReactComponent as Home } from '../images/icons/home.svg';
import { ReactComponent as Top } from '../images/Top.svg';
import { ReactComponent as Bottom } from '../images/Bottom.svg';
import { log } from 'console';

export function Navbar() {
    const navListData = [
        { icon: Home, path: "/", text: 'Home', id: 1},
        { icon: Course, path: "#", text: 'My Courses', id: 2},
        { icon: Heart, path: "#", text: 'Favorite', id: 3},
        { icon: Test, path: "#", text: 'Test', id: 4},
        { icon: Award, path: "#", text: 'Achievements', id: 5},
        { icon: Achieve, path: "#", text: 'Certificate', id: 6},
        { icon: Setting, path: "/settings", text: 'Settings', id: 7},
      ];

    const [selected, setSelected] = useState(0);

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        id: number,
      ) => {
        setSelected(id);
        console.log('event', event);
        console.log('target', event.target);
      };

    return (
        <Box sx={{width: 256, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: '24px 0 0 24px', bgcolor: 'primary.main'}}>
            <Box sx={{}}>
                <Typography component="h2" variant="h2" sx={{mt: '49px', mr: '106px', mb: '57px', ml: '42px', color: 'secondary.contrastText'}}>
                    Elearn
                    <Typography component="span" variant="h2" sx={{color: '#FF7C5D'}}>.</Typography>
                </Typography>
                    {navListData.map((item) => (
                    <Link underline="none" component={RouterLink} to={item.path} key={item.id} >
                        <ListItem disablePadding className='list-item' sx={{width: 216}}>
                            <ListItemButton className='list-button' selected={selected === item.id} 
                                onClick={(event) => handleListItemClick(event, item.id)}
                                sx={{pl: '24px', py: '16px', borderRadius: '0px 12px 12px 0px'}} >
                                <SvgIcon component={item.icon} sx={{color: 'transparent', stroke: selected === item.id ? '#ffffff' : '#808191'}} fill="none" inheritViewBox />
                                <ListItemText  primary={item.text} primaryTypographyProps={{ fontSize: 14, fontWeight: 600, fontFamily: 'Inter', ml: '16px', color: selected === item.id ? '#ffffff' : '#808191',}}/>
                                
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    ))}
            </Box>
            <Box sx={{display: 'flex', gap: 2, pt: '24px', pb: '30px', pl: '26px', alignItems: 'center'}}>
                <Avatar alt="Toda D" src="/images/avatar.png" />
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <Typography variant='subtitle2' 
                        sx={{color: 'secondary.contrastText'}}>
                        Toda D.
                    </Typography>
                    <Typography sx={{fontSize: 13, fontWeight: 600, fontFamily: 'Inter'}}>
                        Premium account
                    </Typography>
                </Box>
                <Box sx={{width: 24, height: 24, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '6px'}}>
                    <SvgIcon component={Top} inheritViewBox sx={{fill: 'none', width: 8, height: 4, m: 0, p: 0}}/>
                    <SvgIcon component={Bottom} inheritViewBox sx={{fill: 'none', width: 8, height: 4, m: 0, p: 0, color: 'info'}}/>
                </Box>
            </Box>  
        </Box> 
    )
}