import { Paper, Box, Button, Typography, Card, CardContent, CardActionArea, CardActions } from '@mui/material';
import { ICourseCard } from '../interfaces';

interface CourseCardProps {
    courseItem: ICourseCard
}

export function CourseCard({courseItem}: CourseCardProps) {
    return (
        <Card variant="outlined" sx={{width: '190px', borderRadius: '24px', px: 0}}>
            <CardActionArea sx={{pl: '4px', pt: '8px'}}>
                <CardContent>
                    <Typography variant='h6' sx={{mb: '8px'}}>{courseItem.title}</Typography>
                    <Typography variant='body2' sx={{mb: '37px'}}>{courseItem.text}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{pl: '20px'}}>
                <Typography variant='body1' sx={{mb: '16px'}}>{courseItem.subscribersQty}</Typography>
            </CardActions>
        </Card>
    )
}
