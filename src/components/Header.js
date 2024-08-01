import React, { useContext, useState } from 'react';
import { AppBar, Toolbar, Typography, Switch, Button, FormControlLabel, Avatar, IconButton, Menu, MenuItem, Box } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useMediaQuery, useTheme } from '@mui/material';
import { LanguageContext, useTranslation } from '../context/LanguageContext';
import { Link } from 'react-scroll';
import logo from '../img/logo.png';

const Header = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const t = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#3f51b5' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar
            alt="logo"
            src={logo}
            sx={{
              width: { xs: 50, sm: 50, md: 60 },
              height: { xs: 50, sm: 50, md: 60 },
              border: '2px solid #3f51b5',
            }}
          />
          <Typography variant="h6" sx={{ marginLeft: 2 }}>
            {t('header').title}
          </Typography>
        </Box>

        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {t('header').options.map((option, index) => (
                <MenuItem key={index} onClick={handleMenuClose}>
                  <Link
                    to={option.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    {option}
                  </Link>
                </MenuItem>
              ))}
              <MenuItem onClick={(e) => e.stopPropagation()}>
                <FormControlLabel
                  control={<Switch checked={language === 'en'} onChange={toggleLanguage} color="default" />}
                  label={language === 'en' ? 'EN' : 'ES'}
                  sx={{ color: '#000', marginLeft: 2 }}
                />
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
            ))}
            <FormControlLabel
              control={<Switch checked={language === 'en'} onChange={toggleLanguage} color="default" />}
              label={language === 'en' ? 'EN' : 'ES'}
              sx={{ color: '#fff', marginLeft: 2 }}
            />
            {language === 'en' ? (
              <img src="https://flagcdn.com/us.svg" height={25} alt="US Flag" style={{ marginLeft: 2 }} />
            ) : (
              <img src="https://flagcdn.com/mx.svg" height={25} alt="MX Flag" style={{ marginLeft: 2 }} />
            )}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
