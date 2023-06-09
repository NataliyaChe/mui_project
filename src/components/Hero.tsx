import { Paper, Box, Typography } from '@mui/material';
import { CourseCard } from '../components/CourseCard';
import BackgroundImage from '../images/image_bg.png';
import { Slider } from '../components/Slider';
import { newCourses } from '../data/HeroCardData';
import { courses } from '../data/MyCourses';

export function Hero() {

    return (
        <Box sx={{width: 620, bgcolor: 'background.default', p: '47px 23px 32px 34px'}}>
            <Box sx={{mb: '29px'}}>
                <Typography component="h3" variant="h3" sx={{fontWeight: 500,mb: 2.5, color: 'text.primary'}}>
                    Hi toda,
                </Typography>
                <Typography component="h1" variant="h1" sx={{color: 'text.primary'}}>
                    What will you learn today?
                </Typography>
            </Box>
            <Box 
            sx={{width: 620, bgcolor: 'primary.main', borderRadius: '24px', mb: '62px', display: 'flex', gap: '36px'}}>
                <Paper elevation={0} 
                sx={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: '100%', maxHeight: 307, width: 315, bgcolor: 'primary.main', ml: '14px', mt: '18px'}} />
                <Slider newCourses={newCourses} />    
            </Box>
            <Box>
                <Typography variant="h5" sx={{mb: '16px', color: 'text.secondary'}}>
                    Your learning path
                </Typography>
                <Box sx={{display: 'flex', gap: '24px'}}>
                    {courses.map((courseItem) => (
                        <CourseCard courseItem={courseItem} key={courseItem.id}/>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}