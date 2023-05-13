import { Paper, Box, Button, Typography, Card, CardContent, CardActionArea, CardActions } from '@mui/material';
import { IHeroCard } from '../interfaces';
import Carousel from 'react-material-ui-carousel';
import { HeroCard } from '../components/HeroCard'

interface SliderProps {
    newCourses: IHeroCard[]
}

export function Slider({ newCourses }: SliderProps) {
    return (
        <Box  sx={{p: 0, width: 203
        }}>
            <Carousel 
                autoPlay={false}
                navButtonsAlwaysInvisible={true}
                indicatorContainerProps={{
                    style: {
                        textAlign: 'left',
                        color: 'red'   
                    }
                }}>
                {newCourses.map((item) => (
                <HeroCard item={item} key={item.id} />
            )
            )}
            </Carousel>
        </Box>
    )
}