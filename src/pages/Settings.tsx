import { IHeroCard } from '../interfaces';
import { Slider } from '../components/Slider';

import { Box } from '@mui/material';

export function Settings() {
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

    return (
        <Box  sx={{p: '20px', width: 1183, bgcolor: '#E6E6FA',
        }}>
            <Slider newCourses={newCourses} />
        </Box>
    )
}