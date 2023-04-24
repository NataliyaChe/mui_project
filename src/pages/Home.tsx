
import { Aside } from '../components/Aside';
import { Hero } from '../components/Hero';
import { Paper, Box } from '@mui/material';

export function Home() {
    return (
        <Box className='home'>
            <Hero />
            <Aside />
        </Box>
    )
}