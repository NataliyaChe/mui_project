import { useState } from 'react';
import { BrowserRouter as Router, Link as RouterLink } from "react-router-dom";
import { Divider, Paper, Box, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Link, Avatar, Collapse } from '@mui/material';
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



export function Navbar() {
    

    const navListData = [
        { icon: <SvgIcon component={Home}  sx={{fill: 'none'}} inheritViewBox />, path: "/", text: 'Home', id: 1},
        { icon: <SvgIcon component={Course} sx={{fill: 'none'}} inheritViewBox />, path: "#", text: 'My Courses', id: 2},
        { icon: <SvgIcon component={Heart} fill="transparent" sx={{fill: 'none'}} inheritViewBox />, path: "#", text: 'Favorite', id: 3},
        { icon: <SvgIcon component={Test} sx={{fill: 'none'}} inheritViewBox />, path: "#", text: 'Test', id: 4},
        { icon: <SvgIcon component={Award} sx={{fill: 'none'}} inheritViewBox />, path: "#", text: 'Achievements', id: 5},
        { icon: <SvgIcon component={Achieve} sx={{fill: 'none'}} inheritViewBox />, path: "#", text: 'Certificate', id: 6},
        { icon: <SvgIcon component={Setting} sx={{fill: 'none'}}inheritViewBox />, path: "/settings", text: 'Settings', id: 7},
      ];
    // const data = [
    //     { icon: 'Home', path: "/", text: 'Home'},
    //     { icon: 'Course', path: "#", text: 'My Courses'},
    //     { icon: 'Heart', path: "#", text: 'Favorite'},
    //     { icon: 'Test', path: "#", text: 'Test'},
    //     { icon: 'Award', path: "#", text: 'Achievements'},
    //     { icon: 'Achieve', path: "#", text: 'Certificate'},
    //     { icon: 'Setting', path: "/settings", text: 'Settings'},
    //   ];

    const [selected, setSelected] = useState(0);

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        id: number,
      ) => {
        setSelected(id);
      };

    return (
        <Box className="nav" sx={{width: 256, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: '24px 0 0 24px', bgcolor: '#FDFDFD'}}>
            <Box sx={{}}>
                <Typography component="h2" variant="h2" sx={{mt: '49px', mr: '106px', mb: '57px', ml: '42px'}}>
                    Elearn
                    <Typography component="span" variant="h2" sx={{color: '#FF7C5D'}}>.</Typography>
                </Typography>
                {/* <List sx={{ mr: '40px'}}> */}
                    {navListData.map((item) => (
                    <Link underline="none" component={RouterLink} to={item.path} >
                        <ListItem disablePadding className='list-item' sx={{width: 216}}>
                            <ListItemButton selected={selected === item.id} 
                                onClick={(event) => handleListItemClick(event, item.id)}
                                sx={{pl: '24px', py: '16px', borderRadius: '0px 12px 12px 0px'}}>
                                {/* <ListItemIcon sx={{minWidth: 24}}> */}
                                {/* <SvgIcon component={item.icon} fill="none" inheritViewBox /> */}
                                {item.icon}
                                {/* </ListItemIcon> */}
                                <ListItemText  primary={item.text} primaryTypographyProps={{ fontSize: 14, fontWeight: 600, fontFamily: 'Inter', color: '#808191', ml: '16px'}}/>
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    ))}
                {/* </List> */}
            </Box>
            <Box sx={{display: 'flex', gap: 2, pt: '24px', pb: '30px', pl: '26px', alignItems: 'center'}}>
                <Avatar alt="Toda D" src="/images/avatar.png" />
                <Box sx={{display: 'flex', flexDirection: 'column',}}>
                    <Typography>Toda D.</Typography>
                    <Typography>Premium account</Typography>
                </Box>
                <Box sx={{width: 24, height: 24, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '6px'}}>
                {/* <Collapse>
                        <Typography>Top</Typography>
                </Collapse>
                <Collapse>
                        <Typography>Bottom</Typography>
                </Collapse> */}
                    <SvgIcon component={Top} inheritViewBox sx={{fill: 'none', width: 8, height: 4, m: 0, p: 0}}/>
                    <SvgIcon component={Bottom} inheritViewBox sx={{fill: 'none', width: 8, height: 4, m: 0, p: 0}}/>
                </Box>
            </Box>  
        </Box> 
    )
}