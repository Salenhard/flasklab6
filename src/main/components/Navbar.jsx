import { AppBar } from "@mui/material";
import { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import StyledToolBar from "./StyledToolBar";
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {Link} from 'react-router-dom';
interface ComponentProps {
  active: string;
}

function Navbar({ active } : ComponentProps) {
    const [open, setOpen] = useState(false)
    const toggleDrawer = (isOpen) => () => {
      setOpen(isOpen);
    };
    
    return (
      <AppBar
      position="static"
          sx={{
            boxShadow: 0,
            bgcolor: 'transparent',
            mt: '28px',
          }}
      >
          <Container maxWidth="xl">
              <StyledToolBar>
                <Typography variant="h6" sx={{ color: '#5d8aa8' }}>
                  Самые высокие здания и сооружения
                </Typography>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Link to="/">
                    <Button variant={active === "1" ? "contained" : "text"}
                      color="info" size="medium">
                      Главная
                    </Button>
                  </Link>
                  <Link to="/list">
                    <Button variant={active === "2" ? "contained" : "text"}
                      color="info" size="medium">
                      Список зданий
                    </Button>
                  </Link>
                  <Button variant={active === "3" ? "contained" : "text"}
                  color="info" size="medium">
                    Диаграммы
                  </Button>
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' }}}>    
                <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                    <CloseRoundedIcon/>
                    <MenuIcon/>
                </IconButton>
                    <Drawer 
                    anchor="top"
                    open={ open }
                    onClose={toggleDrawer(false)}
                    >
                    <Box>
                      <Link to="/">
                        <MenuItem selected={active === "1" ? "true" : ""}>Главная</MenuItem>
                      </Link>
                      <Link to="/list">
                        <MenuItem selected={active === "2" ? "true" : ""}>Список зданий</MenuItem>
                      </Link>
                        <MenuItem selected={active === "3" ? "true" : ""}>Контакты</MenuItem>  
                    </Box>
                  </Drawer>  
               </Box>
              </StyledToolBar>
            </Container>  
      </AppBar>
    );
  }

export default Navbar;