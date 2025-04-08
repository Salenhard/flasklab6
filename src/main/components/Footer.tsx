import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: '#f5f5f5',
        borderTop: '1px solid #e0e0e0',
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Самые высокие здания и сооружения. Все права защищены.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;