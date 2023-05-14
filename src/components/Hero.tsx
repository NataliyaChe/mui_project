import { Paper, Box, Button, Typography, Card, CardContent, AvatarGroup, Avatar } from '@mui/material';
import { CourseCard } from '../components/CourseCard';
import BackgroundImage from '../images/image_bg.png';
import { Slider } from '../components/Slider';
import { IHeroCard } from '../interfaces';

export function Hero() {
    const newCourses: IHeroCard[] = [
        {
            id: 1,
            title: 'Artificial Intelligence for Marketing', 
            text: 'Learn how artificial intelligence is reshaping the way marketing is done at both large and small organizations.',
        },
        {
            id: 2,
            title: 'Sketch from A to Z', 
            text: '12 hours of video tutorials',
        },
        {
            id: 3,
            title: 'Intro to React', 
            text: 'Learn how artificial intelligence is reshaping the way marketing is done at both large and small organizations.',
        },
        {
            id: 4,
            title: 'Become a Manager', 
            text: '24 hours of video tutorials',
        },
    ]

    const courses = [
        {
            title: 'Sketch from A to Z', 
            text: '12 hours of video tutorials',
            subscribersQty: '423 students',
            id: 1
        },
        {
            title: 'Intro to React', 
            text: '8 hours of video tutorials',
            subscribersQty: '648 students',
            id: 2
        },
        {
            title: 'Become a Manager', 
            text: '24 hours of video tutorials',
            subscribersQty: '562 students',
            id: 3
        },
    ]

    return (
        <Box className="hero" sx={{width: 620}}>
            <Box className='hero__title'>
                <Typography component="h3" variant="h3" sx={{mb: 2.5}}>
                    Hi toda,
                </Typography>
                <Typography component="h1" variant="h1" >
                    What will you learn today?
                </Typography>
            </Box>
            <Box className="hero__img" sx={{width: 620, bgcolor: '#2F3CED', borderRadius: '24px', mb: '62px', pt: '18px', display: 'flex', gap: '36px'}}>
                <Paper elevation={0} sx={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: '100%', height: 359, width: 315, bgcolor: '#2f3ced', mb: '28px', ml: '14px'}} />
                <Slider newCourses={newCourses} />    
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