import { Box, Typography } from '@mui/material';

export function Settings() {

    return (
        <Box  sx={{p: '20px', width: 1183, bgcolor: 'background.default'
        }}>
            <Typography component="h3" variant="h3" sx={{mt: '47px', mb: 2.5, color: 'text.primary'}}>
                Setting page
            </Typography>
        </Box>
    )
}