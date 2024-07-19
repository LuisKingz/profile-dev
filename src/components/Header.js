import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Grid, Switch } from '@mui/material';
import { Code } from '@mui/icons-material';
import { LanguageContext, useTranslation } from '../context/LanguageContext';

const Header = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const t = useTranslation();


  return (
    <AppBar position="static" sx={{ backgroundColor: '#3f51b5' }}>
      <Toolbar>
        <Code sx={{ mr: 1 }} />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {t('header').title}
        </Typography>

        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ flexGrow: 2 }}>
          {t('header').options.map((option, index) => (
            <Grid item key={index}>
              <Typography variant="body1" component="a" href={`#${option.toLowerCase()}`} sx={{ color: 'white', textDecoration: 'none' }}>
                {option}
              </Typography>
            </Grid>
          ))
          }
        </Grid>

        <Typography variant="body2" sx={{ marginRight: 1 }}>
          ES
        </Typography>
        <Switch
          checked={language === 'en'}
          onChange={toggleLanguage}
          color="default"
          inputProps={{ 'aria-label': 'language switch' }}
        />
        <Typography variant="body2" sx={{ marginLeft: 1 }}>
          EN
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;