import { Paper, Box, Button, Typography, Card, CardContent, CardActionArea, CardActions } from '@mui/material';
import { IHeroCard } from '../interfaces';

interface HeroCardProps {
    item: IHeroCard
}

export function HeroCard({item}: HeroCardProps) {
    return (
        // <Card variant="elevation" elevation={0} sx={{bgcolor: 'transparent', width: 215, pt: '33px', ml: '353px'}}>
        //     {/* <Paper elevation={0} sx={{ backgroundImage: `url(${BackgroundImage})`, height: 359, width: 359, bgcolor: '#2f3ced', ml: '14px', pt: '18px'}}></Paper> */}
        //     <CardContent sx={{p: 0, mb: '16px'}}>
        //         <Typography variant='h3' sx={{color: '#FFFFFF', lineHeight: '32px', mb: '8px'}}>{item.title}</Typography>
        //         <Typography variant='caption' >
        //             {item.text}
        //         </Typography>
        //     </CardContent>
        //     <CardActions sx={{p: 0, mb: '42px'}}>
        //         <Button variant="contained" sx={{width: '158px', bgcolor: '#FFFFFF', borderRadius: '16px', py: '18px'}} >
        //             <Typography variant='caption' sx={{color: '#11142D', fontWeight: 700, textTransform: 'none'}}>
        //                 Learn now
        //             </Typography>
        //         </Button>
        //     </CardActions>
        // </Card>
        <Card variant="elevation" elevation={0} sx={{bgcolor: 'transparent', width: 215, pt: '33px', ml: '353px'}}>    
            <CardContent sx={{p: 0, mb: '16px'}}>
                <Typography variant='h3' sx={{color: '#FFFFFF', lineHeight: '32px', mb: '8px'}}>{item.title}</Typography>
                <Typography variant='caption' >
                    {item.text}
                </Typography>
            </CardContent>
            <CardActions sx={{p: 0, mb: '42px'}}>
                <Button variant="contained" sx={{width: '158px', bgcolor: '#FFFFFF', borderRadius: '16px', py: '18px'}} >
                    <Typography variant='caption' sx={{color: '#11142D', fontWeight: 700, textTransform: 'none'}}>
                        Learn now
                    </Typography>
                </Button>
            </CardActions>
        </Card>
    )
}