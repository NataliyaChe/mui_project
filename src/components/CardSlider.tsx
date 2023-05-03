
import Carousel from 'react-material-ui-carousel'
import { Paper, Box, Button, Typography, Card, CardContent, CardActionArea, CardActions } from '@mui/material';

 interface ICard {
  id: string
  title: string
  text: string
}

interface CardsProps {
  courseItem: ICard
}

export function CardSlider() {
const cards  = [
    {
      id: 1,
      title: 'Card 1',
      text: 'Description for card 1'
    },
    {
      id: 2,
      title: 'Card 2',
      text: 'Description for card 2'
    },
    {
      id: 3,
      title: 'Card 3',
      text: 'Description for card 3'
    },
    
  ];

   
  
    return (
      <Carousel >
            {cards.map(card => (
          <div key={card.id}>
            <Card sx={{width: 400, bgcolor: '#FF6347'}} style={{ width: '400px'}}>
              <CardContent>
                <Typography>{card.title}</Typography>
                <Typography>{card.text}</Typography>
              </CardContent>
            </Card>
          </div>
        ))}
        </Carousel>
    );
  };

