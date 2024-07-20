import React, { useContext } from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { LanguageContext, useTranslation } from '../context/LanguageContext';

const Experience = () => {
  const { language } = useContext(LanguageContext);
  const t = useTranslation();
  const jobs = t('experience').jobs;

  return (
    <Container id = { language === 'en' ? 'experience' : 'experiencia'} sx={{ marginBottom: 3 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        {t('experience').title}
      </Typography>
      {
        Object.keys(jobs).map((jobKey, index) => {
          const job = jobs[jobKey];
          return (
            <Accordion key={index} sx={{
              backgroundColor: '#f5f5f5',
              borderTopLeftRadius: 2,
              borderTopRightRadius: 2,
              boxShadow: '0 3px 5px rgba(0,0,0,0.1)',
              '&:hover': {
                backgroundColor: '#e0e0e0'
              }
            }} >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h6">{jobKey}</Typography>
                <Typography variant="subtitle1" sx={{
                  marginLeft: 2,
                  color: '#757575',
                  fontWeight: 'bold',
                  fontSize: 15,
                  display: { xs: 'none', sm: 'block' },
                  textAlign: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  verticalAlign: 'center',
                }}>
                  {job.time}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={2}>
                  <Typography variant="subtitle1" sx={{
                    marginLeft: 2,
                    color: '#757575',
                    fontWeight: 'bold',
                    fontSize: 15,
                    display: { xs: 'block', sm: 'none' },
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    verticalAlign: 'center',
                  }}>
                    {job.time}
                  </Typography>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                      {job.subtitle_activities}
                    </Typography>
                    <ul>
                      {
                        job.activities.map((activity, index) => (
                          <li key={index + 5}>{activity}</li>
                        ))
                      }
                    </ul>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                      {job.subtitle_achievements}
                    </Typography>
                    <ul>
                      {
                        job.achievements.map((achievement, index) => (
                          <li key={index + 10}>{achievement}</li>
                        ))
                      }
                    </ul>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          )
        })
      }
    </Container>
  );
};

export default Experience;
