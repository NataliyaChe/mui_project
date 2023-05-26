import { Button, Typography, Card, CardContent, CardActions } from '@mui/material';
import { IHeroCard } from '../interfaces';

interface HeroCardProps {
    item: IHeroCard
}

export function HeroCard({item}: HeroCardProps) {
    return (
        <Card  variant="elevation" elevation={0} sx={{bgcolor: 'transparent', width: 203, minHeight: 274, pt: '33px', pb: '42px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>    
            <CardContent sx={{p: 0, height: 220 }}>
                <Typography variant='h3' sx={{color: '#FFFFFF', lineHeight: '32px', mb: '8px'}}>{item.title}</Typography>
                <Typography variant='caption' >
                    {item.text}
                </Typography>
            </CardContent>
            <CardActions sx={{p: 0, m: 0}}>
                <Button variant="contained" sx={{width: '158px', bgcolor: '#FFFFFF', borderRadius: '16px', py: '18px', mb: 0}} >
                    <Typography variant='caption' sx={{color: '#11142D', fontWeight: 700, textTransform: 'none'}}>
                        Learn now
                    </Typography>
                </Button>
            </CardActions>
        </Card>
    )
}