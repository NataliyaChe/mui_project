import { Paper, Box, Button, Typography, Card, CardContent } from '@mui/material';
import { SliderCard } from '../components/SliderCard';
import { CourseCard } from '../components/CourseCard';
import BackgroundImage from '../images/images_8.svg';
import { ICourseCard } from '../interfaces';

// interface ICourseCard {
//     title: string
//     text: string
//     subscribersQty: string
// }

export function Hero() {
    const courses = [
        {
            title: 'Sketch from A to Z', 
            text: '12 hours of video tutorials',
            subscribersQty: '423 students',
        },
        {
            title: 'Sketch from A to Z', 
            text: '8 hours of video tutorials',
            subscribersQty: '648 students'
        },
        {
            title: 'Become a Manager', 
            text: ' 24 hours of video tutorials  ',
            subscribersQty: '562 students'
        },
    ]
    return (
        <Box className="hero">
            <Box className='hero__title'>
                <Typography component="h3" variant="h3" sx={{mb: 2.5}}>
                    Hi toda,
                </Typography>
                <Typography component="h1" variant="h1" >
                    What will you learn today?
                </Typography>
            </Box>
                <Box className="hero__img" sx={{width: 620, bgcolor: '#2F3CED', borderRadius: '24px', mb: 10.5, pt: '18px', pl: '14px'}}>
                    <Paper elevation={0} sx={{ backgroundImage: `url(${BackgroundImage})`, height: 359, width: 359, bgcolor: '#2f3ced', mb: '28px',}}>
                        <SliderCard />
                    </Paper>
                   
                </Box>
            <Box>
                <Typography variant="h5" sx={{mb: '16px'}}>Your learning path</Typography>
                <Box sx={{display: 'flex', gap: '24px'}}>
                    {courses.map((courseItem) => (
                        <CourseCard courseItem={courseItem} />
                    ))}
                </Box>
            </Box>
        </Box>
    )
}