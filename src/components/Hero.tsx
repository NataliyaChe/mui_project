import { Paper, Box, Typography } from '@mui/material';
import { CourseCard } from '../components/CourseCard';
import BackgroundImage from '../images/image_bg.png';
import { Slider } from '../components/Slider';
import { newCourses } from '../data/HeroCardData';
import { courses } from '../data/MyCourses';

export function Hero() {

    return (
        <Box sx={{width: 620, bgcolor: '#FDFDFD', p: '47px 23px 32px 34px'}}>
            <Box sx={{mb: '29px'}}>
                <Typography component="h3" variant="h3" sx={{mb: 2.5}}>
                    Hi toda,
                </Typography>
                <Typography component="h1" variant="h1" >
                    What will you learn today?
                </Typography>
            </Box>
            <Box sx={{width: 620, bgcolor: '#2F3CED', borderRadius: '24px', mb: '62px', pt: '18px', display: 'flex', gap: '36px'}}>
                <Paper elevation={0} sx={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: '100%', height: 359, width: 315, bgcolor: '#2f3ced', mb: '28px', ml: '14px'}} />
                <Slider newCourses={newCourses} />    
            </Box>
            <Box>
                <Typography variant="h5" sx={{mb: '16px'}}>Your learning path</Typography>
                <Box sx={{display: 'flex', gap: '24px'}}>
                    {courses.map((courseItem) => (
                        <CourseCard courseItem={courseItem} key={courseItem.id}/>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}