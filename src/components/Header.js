import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Switch, Button, FormControlLabel } from '@mui/material';
import { Code } from '@mui/icons-material';
import { LanguageContext, useTranslation } from '../context/LanguageContext';
import { Link } from 'react-scroll';
import { FaFlag } from 'react-icons/fa';

const Header = () => {

  const { language, toggleLanguage } = useContext(LanguageContext);
  const t = useTranslation();


  return (
    <AppBar position="static" sx={{ backgroundColor: '#3f51b5' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Code sx={{ mr: 2 }} />
          <Typography variant="h6">
            {t('header').title}
          </Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {t('header').options.map((option, index) => (
            <Link
              key={index}
              to={option.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Button sx={{ color: '#fff', marginRight: 2 }}>
                {option}
              </Button>
            </Link>
          ))
          }
          <FormControlLabel
            control={<Switch checked={language === 'en'} onChange={toggleLanguage} color="default" />}
            label={language === 'en' ? 'EN' : 'ES'}
            sx={{ color: '#fff' }}
          />
          {
            language === 'en' ?
            <FaFlag className='icon flag primary' fontSize="1.4rem" color='#fff' /> :
            <FaFlag className='icon flag primary' fontSize="1.4rem" color='#fff' style={{ transform: 'scaleX(-1)' }} />
          }
        </div>
      </Toolbar>
    </AppBar >
  );
};

export default Header;