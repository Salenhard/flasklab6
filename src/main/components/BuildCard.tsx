import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material';

interface ComponentProps {
    building: {
        img: string, 
        title: string, 
        description: string[],
    };
    index:number;
  }
const StyledTypography = styled(Typography)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 1,
    color:'text.secondary',
  }));

function BuildCard({ building, index } : ComponentProps) {
    const isEven = index % 2 === 0;
    return (
      <Card sx={{  display: 'flex', flexDirection: isEven ? 'row-reverse': 'row' }}>
        <CardMedia
            component="img"
            alt={ building.title }
            image={ building.img }
        />
        <Box>
          <CardContent>
            <Typography gutterBottom variant="h5" >
              { building.title }
            </Typography>
            { building.description.map((item, ind) => (
              <StyledTypography key={ind} variant="body2">    
                { item }
              </StyledTypography>
            ))}
          </CardContent>
          <CardActions sx={{ justifyContent: isEven ? 'flex-start' : 'flex-end' }}>
            <Button size="small">Подробнее</Button>
          </CardActions>
        </Box>
      </Card>
    )
}

export default BuildCard;