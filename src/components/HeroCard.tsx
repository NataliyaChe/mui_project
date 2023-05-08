import { Paper, Box, Button, Typography, Card, CardContent, CardActionArea, CardActions } from '@mui/material';
import { IHeroCard } from '../interfaces';

interface HeroCardProps {
    item: IHeroCard
}

export function HeroCard({item}: HeroCardProps) {
    return (
        <Card variant="elevation" elevation={0} sx={{bgcolor: 'transparent', width: 203, height: '273px', pt: '33px'}}>    
            <CardContent sx={{p: 0, mb: '16px',  }}>
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