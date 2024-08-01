import React, { useContext } from 'react';
import { Box, Typography, Link } from '@mui/material';
import { LanguageContext } from '../context/LanguageContext';

const Footer = () => {
  const { language } = useContext(LanguageContext);

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
      <Typography variant="body2">
        {language === 'en' ? 'Developed by ' : 'Desarrollado por '}
        <Link color="inherit" href="https://github.com/LuisKingz">
          Luis Reyes
        </Link>
      </Typography>
      <Typography variant="body1">
        &copy; 2024 {language === 'en' ? 'All rights reserved' : 'Todos los derechos reservados'}
      </Typography>
    </Box>
  );
};

export default Footer;