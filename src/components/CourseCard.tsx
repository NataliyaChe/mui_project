import { useState } from 'react';
import { Box, Button, Typography, Card, CardContent, CardActionArea, CardActions, AvatarGroup, Avatar, Checkbox, IconButton, SvgIcon, Popover } from '@mui/material';
import { ICourseCard } from '../interfaces';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import { ReactComponent as Dots } from '../images/Group.svg';

interface CourseCardProps {
    courseItem: ICourseCard
}

export function CourseCard({courseItem}: CourseCardProps) {
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
        <Card variant="outlined" 
        sx={{width: '190px', borderRadius: '24px', p: '24px 15px 6px 20px', bgcolor: 'secondary.main'}}>
            <CardActionArea>
                <CardContent sx={{ p: 0}}>
                    <Typography variant='h6' 
                    sx={{mb: '8px', lineHeight: '19.36px', color: 'text.primary'}}>
                        {courseItem.title}
                    </Typography>
                    <Typography variant='body2' 
                    sx={{mb: '37px', width: '60%'}}>
                        {courseItem.text}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions 
                sx={{display: 'block', p: 0}}>
                <Typography variant='body1' component='h3'>
                    {courseItem.subscribersQty}
                </Typography>
                <Box 
                sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <AvatarGroup max={6} spacing={'small'}>
                        {courseItem.subscribers.map((user) => (
                            <Avatar alt={user.name} src="/static/images/avatar/1.jpg" sx={{ width: 24, height: 24}}
                            key={user.id}/>
                        ))}
                    </AvatarGroup>
                    <Box>
                        <Checkbox icon={<StarOutlineRoundedIcon />} checkedIcon={<StarRoundedIcon />} defaultChecked 
                            sx={{width: 16, height: 16, mr: '6px', '&.Mui-checked': {color: '#F2C94C'}}} />
                        <IconButton onClick={handleClick} aria-describedby={id} sx={{width: 16}}>
                            <SvgIcon component={Dots} sx={{fill: 'none', width: '10px'}} inheritViewBox />
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
                            sx={{ ml: '-50px'}}>
                            <Button>
                                <Typography sx={{color: '#FF754C' }} variant='h6' >
                                    Delete
                                </Typography>
                            </Button>
                        </Popover>
                    </Box>
                </Box>   
            </CardActions>
        </Card>
    )
}
