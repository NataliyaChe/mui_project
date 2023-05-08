import { SvgIcon, Paper, Box, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Link, Avatar, Collapse } from '@mui/material';
import { Search } from '../components/Search';
import { ReactComponent as Codeigniter } from '../images/courses_item/1.svg';

export function Aside() {
    const progressListData = [
        { icon: <SvgIcon component={Codeigniter}  sx={{fill: 'none', width: '32px'}} inheritViewBox />, path: "#", title: 'Build Your First Application', text: 'Codeigniter', id: 1},
        { icon: <SvgIcon component={Codeigniter}  sx={{fill: 'none', width: '32px'}} inheritViewBox />, path: "#", title: 'Build something beautiful', text: 'Sketch', id: 2},
        { icon: <SvgIcon component={Codeigniter}  sx={{fill: 'none', width: '32px'}} inheritViewBox />, path: "#", title: 'Firebase on Android: Cloud Fire', text: 'Firebase', id: 3},
        { icon: <SvgIcon component={Codeigniter}  sx={{fill: 'none', width: '32px'}} inheritViewBox />, path: "#", title: 'Creating Custom Animations', text: 'Principle', id: 4},
    ]

    return (
        <Box className="aside" sx={{borderRadius: '0px 24px 24px 0px'}}>
            <Search />
            <Typography variant='h6' sx={{ml: '39px', mb: '24px'}}>
                Course In Progress
            </Typography>
            <List sx={{ml: '24px', mb: '53px'}}>
                {progressListData.map((item) => (
                    <ListItem disablePadding className='list-item' sx={{width: 444, display: 'flex', alignItems: 'center', p: '15px 24px 13px'}}>
                        <Paper sx={{width: 56, height: 56, borderRadius: '16px',bgcolor: '#FFA2C0'}}>
                            {item.icon}
                        </Paper>
                        <ListItemText  primary={item.title} primaryTypographyProps={{ fontSize: 16, fontWeight: 600, fontFamily: 'Inter', color: '#11142D'}}
                        secondary={item.text} secondaryTypographyProps={{fontSize: 13, fontWeight: 600, fontFamily: 'Inter', color: '#808191'}}/>
                    </ListItem>
                ))}
            </List>
            <Typography variant='h5' sx={{ml: '24px', mb: '16px'}}>
                Your learning point 
            </Typography>
        </Box>
        
    )
}