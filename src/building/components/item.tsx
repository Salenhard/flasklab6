import { Typography } from "@mui/material"
import structures from "../../data";
import {Link} from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
const imgData=structures.slice(0, -1);
interface ComponentProps {
    index: number;
  }
  function Item({ index }: ComponentProps) {
    return (
      <Container maxWidth="lg">

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#1976d2' }}>
            Главная
          </Link>
          {" > " + imgData[index].title}
        </Typography>
  
        <Typography variant="h4" component="h1" align="center" sx={{ mb: 3, fontWeight: 'bold' }}>
          {imgData[index].title}
        </Typography>
  
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
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
              {imgData[index].description.map((item, ind) => (
                <Typography key={ind} variant="body2" color="text.primary">
                  {item}
                </Typography>
              ))}
            </Box>
      </Container>
    );
  }
  export default Item