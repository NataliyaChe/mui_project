// import { CardSlider } from '../components/CardSlider'
import { Paper, Box, Button, Typography, Card, CardContent, CardActionArea, CardActions } from '@mui/material';
import { IHeroCard } from '../interfaces';
import Carousel from 'react-material-ui-carousel';
import { HeroCard } from '../components/HeroCard'

interface SliderProps {
    newCourses: IHeroCard[]
}

export function Slider({ newCourses }: SliderProps) {
    return (
        <Box  sx={{p: 0, width: 215, ml: '353px'
        }}>
            <Carousel 
                autoPlay={false}
                navButtonsAlwaysInvisible={true}>
            {newCourses.map(item => (
            //     <Card variant="elevation" elevation={0} sx={{bgcolor: 'transparent', width: 215, pt: '33px', ml: '353px'}}>
                
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
        //   <div key={item.id}>
            <HeroCard item={item} key={item.id}/>
        //   </div>
        ))}
        </Carousel>
            {/* {newCourses.map((item) => (
                        <HeroCard item={item} />
                    ))} */}
        </Box>
    )
}