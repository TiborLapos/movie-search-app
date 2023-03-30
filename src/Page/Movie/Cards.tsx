import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


const cardData = [
  {
    id: 1,
    title: 'Card 1',
    image: 'https://via.placeholder.com/300x200',
    description: 'This is the description for card 1',
  },
  {
    id: 2,
    title: 'Card 2',
    image: 'https://via.placeholder.com/300x200',
    description: 'This is the description for card 2',
  },
  {
    id: 3,
    title: 'Card 3',
    image: 'https://via.placeholder.com/300x200',
    description: 'This is the description for card 3',
  },
  {
    id: 4,
    title: 'Card 4',
    image: 'https://via.placeholder.com/300x200',
    description: 'This is the description for card 4',
  },
];

function CardGrid() {
  return (
    <Grid container spacing={2}>
      {cardData.map((card) => (
        <Grid item xs={12} sm={6} md={3} key={card.id}>
          <Card>
            <CardMedia
              component="img"
              image={card.image}
              title={card.title}
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                {card.title}
              </Typography>
              <Typography variant="body2" component="p">
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default CardGrid;
