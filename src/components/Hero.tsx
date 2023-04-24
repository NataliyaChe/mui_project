import { Paper, Box, Button, Typography } from '@mui/material';

export function Hero() {
    return (
        <Box className="hero">
            <div className='hero__title'>
                <Typography component="h3" variant="h3" sx={{mb: 2.5}}>
                    Hi toda,
                </Typography>
                <Typography component="h1" variant="h1" >
                    What will you learn today?
                </Typography>
            </div>
            <div className="hero__img">

            </div>
        </Box>
    )
}