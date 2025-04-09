import { Grid, Typography } from "@mui/material"
import structures from "../../data";
import {Link} from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const imgData=structures.slice(0, -1);
interface ComponentProps {
    index: number;
  }
  function Item({ index }: ComponentProps) {
    return (
      <Container maxWidth="lg" sx={{ mt:1 }}>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#1976d2' }}>
            Главная
          </Link>
          {" > " + imgData[index].title}
        </Typography>
  
        <Typography variant="h4" component="h1" align="center" sx={{ mb: 3, fontWeight: 'bold' }}>
          {imgData[index].title}
        </Typography>
  
            <Box sx={{ display: 'flex', justifyContent: 'center' , height:500, mb:1}}>
              <img
                srcSet={imgData[index].img}
                src={imgData[index].img}
                alt={imgData[index].title}
                loading="lazy"
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                }}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
              <Grid container spacing={0.5}>
                {imgData[index].description.map((item, ind) => (
                  <Grid size={{ xs: 6, md: 6 }}>
                    <Typography key={ind} variant="body2">
                      {item}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Box>
      </Container>
    );
  }
  export default Item