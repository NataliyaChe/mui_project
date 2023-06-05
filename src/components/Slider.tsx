import { Box } from '@mui/material';
import { IHeroCard } from '../interfaces';
import Carousel from 'react-material-ui-carousel';
import { HeroCard } from '../components/HeroCard'

interface SliderProps {
    newCourses: IHeroCard[]
}

export function Slider({ newCourses }: SliderProps) {
    return (
        <Box sx={{width: 226, mt: '51px', mb: '30px'}}>
            <Carousel 
                autoPlay={false}
                navButtonsAlwaysInvisible={true}
                height={272}
                indicatorContainerProps={{
                    style: {
                        textAlign: 'left',
                        marginTop: '32px'    
                    }
                }}
                indicatorIconButtonProps={{
                    style: {
                        width: '4px',
                        height: '4px',
                        padding: '8px', 
                        color: '#FFFFFF',
                        margin: '0 5px'
                    }
                }}
                activeIndicatorIconButtonProps={{
                    style: {
                        backgroundColor: '#A0D7E7',
                        width: '8px'
                    }
                }}>
                {newCourses.map((item) => (
                    <HeroCard item={item} key={item.id} />
                ))}
            </Carousel>
        </Box>
    )
}