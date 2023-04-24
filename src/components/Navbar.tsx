// import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Link as RouterLink } from "react-router-dom";
import { Divider, Paper, Box, Drawer, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Link } from '@mui/material';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import { ReactComponent as Setting } from '../images/icons/Setting.svg';
import { ReactComponent as Award } from '../images/icons/award.svg';
import { ReactComponent as Course } from '../images/icons/mycourse.svg';
import { ReactComponent as Heart } from '../images/icons/heart.svg';
import { ReactComponent as Test } from '../images/icons/notepad.svg';
import { ReactComponent as Achieve } from '../images/icons/achieve.svg';
import { ReactComponent as Home } from '../images/icons/home.svg';

const drawerWidth = 240;

export function Navbar() {
    return (
        <div className="nav">
        {/* <Drawer sx={{}} variant="permanent" anchor="left"> */}
            <Toolbar className='title' sx={{}}>
                <Typography component="h2" variant="h2">Elearn.</Typography>
            </Toolbar>
            <List sx={{width: 256,
            // bgcolor: '#001E3C',
            fontSize: 34}}>
                <ListItem disablePadding className='list-item'>
                <Link component={RouterLink} to="/">
                    <ListItemButton >
                        <ListItemIcon>
                        <SvgIcon component={Home} inheritViewBox />
                        </ListItemIcon>
                        <ListItemText  primary="Home" primaryTypographyProps={{ fontSize: 14, fontWeight: 600, fontFamily: 'Inter',}}/>
                    </ListItemButton>
                </Link>
                    {/* <ListItemButton >
                        <ListItemIcon>
                        <SvgIcon component={Home} inheritViewBox />
                        </ListItemIcon>
                        <ListItemText  primary="Home" primaryTypographyProps={{ fontSize: 14, fontWeight: 600, fontFamily: 'Inter',}}/>
                    </ListItemButton> */}
                </ListItem>
                <ListItem disablePadding className='list-item'>
                    <ListItemButton >
                        <ListItemIcon>
                        <SvgIcon component={Course} inheritViewBox />
                        </ListItemIcon>
                        <ListItemText primary="My Courses" primaryTypographyProps={{ fontSize: 14, fontWeight: 600, fontFamily: 'Inter',}}/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding className='list-item'>
                    <ListItemButton>
                        <ListItemIcon>
                        <SvgIcon component={Heart} inheritViewBox />
                        </ListItemIcon>
                        <ListItemText  primary="Favorite" primaryTypographyProps={{ fontSize: 14, fontWeight: 600, fontFamily: 'Inter',}}/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding className='list-item'>
                    <ListItemButton>
                        <ListItemIcon>
                        <SvgIcon component={Test} inheritViewBox />
                        </ListItemIcon>
                        <ListItemText  primary="Test" primaryTypographyProps={{ fontSize: 14, fontWeight: 600, fontFamily: 'Inter',}}/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding className='list-item'>
                    <ListItemButton>
                        <ListItemIcon>
                        <SvgIcon component={Award} inheritViewBox />
                        </ListItemIcon>
                        <ListItemText  primary="Achievements" primaryTypographyProps={{ fontSize: 14, fontWeight: 600, fontFamily: 'Inter',}}/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding className='list-item'>
                    <ListItemButton>
                        <ListItemIcon>
                        <SvgIcon component={Achieve} inheritViewBox />
                        </ListItemIcon>
                        <ListItemText  primary="Certificate" primaryTypographyProps={{ fontSize: 14, fontWeight: 600, fontFamily: 'Inter',}}/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding className='list-item'>
                    <Link component={RouterLink} to="/settings">
                        <ListItemButton >
                            <ListItemIcon>
                            <SvgIcon component={Setting} inheritViewBox />
                            </ListItemIcon>
                            <ListItemText  primary="Settings" primaryTypographyProps={{ fontSize: 14, fontWeight: 600, fontFamily: 'Inter',}}/>
                        </ListItemButton>
                    </Link>
                    {/* <ListItemButton>
                        <ListItemIcon>
                        <SvgIcon component={Setting} inheritViewBox />
                        </ListItemIcon>
                        <ListItemText  primary="Settings" primaryTypographyProps={{ fontSize: 14, fontWeight: 600, fontFamily: 'Inter',}}/>
                    </ListItemButton> */}
                </ListItem>
            </List>
        {/* </Drawer> */}

        </div> 
    )
}