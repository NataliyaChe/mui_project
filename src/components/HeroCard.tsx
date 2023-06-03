import { Button, Typography, Card, CardContent, CardActions } from '@mui/material';
import { IHeroCard } from '../interfaces';

interface HeroCardProps {
    item: IHeroCard
}

export function HeroCard({item}: HeroCardProps) {
    return (
        <Card  variant="elevation" elevation={0} 
        sx={{bgcolor: 'transparent', minHeight: 272, p: 0, m: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>    
            <CardContent sx={{p: 0}}>
                <Typography variant='h3' 
                sx={{color: '#FFFFFF', lineHeight: '32px', mb: '8px'}}>
                    {item.title}
                </Typography>
                <Typography variant='caption' 
                sx={{width: 203, lineHeight: '24px', color: 'primary.contrastText'}}
                paragraph={true}>
                    {item.text}
                </Typography>
            </CardContent>
            <CardActions sx={{p: 0, m: 0}}>
                <Button variant="contained" 
                sx={{width: '158px', bgcolor: '#FFFFFF', borderRadius: '16px', py: '18px', m: 0}}>
                    <Typography variant='caption' 
                    sx={{color: '#11142D', fontWeight: 700, textTransform: 'none', lineHeight: '20px',}}>
                        Learn now
                    </Typography>
                </Button>
            </CardActions>
        </Card>
    )
}