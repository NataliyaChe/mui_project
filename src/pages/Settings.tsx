import { Box, Typography } from '@mui/material';

export function Settings() {

    return (
        <Box  sx={{p: '20px', width: 1183, bgcolor: 'primary.main'
        }}>
            <Typography component="h3" variant="h3" sx={{mt: '47px', mb: 2.5, color: 'secondary.contrastText'}}>
                Setting page
            </Typography>
        </Box>
    )
}