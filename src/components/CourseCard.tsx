import { Paper, Box, Button, Typography, Card, CardContent, CardActionArea, CardActions, AvatarGroup, Avatar, Checkbox, Collapse } from '@mui/material';
import { ICourseCard } from '../interfaces';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';

interface CourseCardProps {
    courseItem: ICourseCard
}

export function CourseCard({courseItem}: CourseCardProps) {
    return (
        <Card variant="outlined" sx={{width: '190px', borderRadius: '24px', px: 0}}>
            <CardActionArea sx={{pl: '4px', pt: '8px', mb: 0}}>
                <CardContent sx={{ pb: 0}}>
                    <Typography variant='h6' sx={{mb: '8px'}}>{courseItem.title}</Typography>
                    <Typography variant='body2' sx={{mb: '37px', width: '60%'}}>{courseItem.text}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{pl: '20px', display: 'block', pt: 0}}>
                    <Typography variant='body1' component='h3' sx={{mb: '16px', }}>{courseItem.subscribersQty}</Typography>
                
                <Box component='div' sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <AvatarGroup max={6} spacing={'small'}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 24, height: 24}}/>
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" sx={{ width: 24, height: 24}}/>
                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" sx={{ width: 24, height: 24}}/>
                        <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" sx={{ width: 24, height: 24}}/>
                        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" sx={{ width: 24, height: 24}}/>
                        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" sx={{ width: 24, height: 24}}/>
                    </AvatarGroup>
                    <Box>
                        <Checkbox icon={<StarOutlineRoundedIcon />} checkedIcon={<StarRoundedIcon />} defaultChecked sx={{'&.Mui-checked': {color: '#F2C94C'}}}/>
                    </Box>
                </Box>
                
            </CardActions>
        </Card>
    )
}
