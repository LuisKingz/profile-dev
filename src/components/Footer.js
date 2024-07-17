import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 3, 
        px: 2, 
        mt: 'auto', 
        backgroundColor: '#f5f5f5', 
        textAlign: 'center'
      }}
    >
      <Typography variant="body1">
        &copy; 2024 Mi Nombre
      </Typography>
      <Typography variant="body2">
        {'Hecho con ❤️ por '}
        <Link color="inherit" href="https://mui.com/">
          Mi Nombre
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;