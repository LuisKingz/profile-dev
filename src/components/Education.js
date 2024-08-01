import React, { useContext } from 'react';
import { Container, Card, CardContent, Typography, Grid, Avatar, Box } from '@mui/material';
import { FaUniversity, FaGraduationCap } from 'react-icons/fa';
import { LanguageContext, useTranslation } from '../context/LanguageContext';

const Education = () => {
  const { language } = useContext(LanguageContext);
  const t = useTranslation();

  return (
    <Container id={language === 'en' ? 'education' : 'educación'} sx={{ padding: 3 }}>
      <Card sx={{ marginBottom: 2, padding: 3, backgroundColor: '#f5f5f5', borderRadius: 2, boxShadow: '0 3px 5px rgba(0,0,0,0.1)' }}>
        <CardContent>
          <Typography variant="h4" component="h2" gutterBottom>
            {language === 'en' ? 'Education' : 'Educación'}
          </Typography>
          {t('education').map((edu, index) => (
            <Grid container spacing={2} key={index} sx={{ marginBottom: 4 }}>
              <Grid item xs={2} sm={1} display="flex" justifyContent="center" alignItems="center">
                <Avatar sx={{ backgroundColor: '#3f51b5', width: { xs: 40, sm: 56 }, height: { xs: 40, sm: 56 } }}>
                  <FaUniversity size={24} />
                </Avatar>
              </Grid>
              <Grid item xs={10} sm={11}>
                <Box sx={{ paddingLeft: 2 }}>
                  <Typography variant="h5" component="h3">
                    {edu.school}
                  </Typography>
                  <Typography variant="subtitle1">
                    <FaGraduationCap /> {edu.degree} | {edu.period}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          ))}
        </CardContent>
      </Card>
    </Container>
  );
};

export default Education;
