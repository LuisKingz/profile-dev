import React, { useContext } from 'react';
import { Container, Typography, Card, CardContent, Grid, Avatar } from '@mui/material';
import { styled } from '@mui/system';
import { LanguageContext, useTranslation } from '../context/LanguageContext';
import logo from '../img/logo.png';

const ProfileCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  padding: theme.spacing(3),
  backgroundColor: '#f5f5f5',
  borderRadius: '16px 16px 0 0',
  boxShadow: '0 3px 5px rgba(0,0,0,0.1)',
}));

const Profile = () => {
  const { language } = useContext(LanguageContext);
  const t = useTranslation();

  return (
    <Container id={language === 'en' ? 'profile' : 'perfil'} sx={{ padding: 3 }}>
      <ProfileCard>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} md={3} sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Avatar
                alt="Luis Fernando"
                src={logo}
                sx={{
                  width: { xs: 110, sm: 150, md: 190 },
                  height: { xs: 110, sm: 150, md: 190 },
                  border: '2px solid #3f51b5',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                  },
                }}
              />
            </Grid>
            <Grid item xs textAlign={'justify'}>
              <Typography variant="h4" component="h2" gutterBottom>
                {t('profile').title}
              </Typography>
              {t('profile').content.map((paragraph, index) => (
                <Typography key={index} variant="body1" paragraph>
                  {paragraph}
                </Typography>
              ))}
            </Grid>
          </Grid>
        </CardContent>
      </ProfileCard>
    </Container>
  );
}

export default Profile;