
import { Aside } from '../components/Aside';
import { Hero } from '../components/Hero';
import { Box } from '@mui/material';

export function Home() {
    return (
        <Box sx={{width: 1183, display: 'flex', justifyContent: 'center'}}>
            <Hero />
            <Aside />
        </Box>
    )
}