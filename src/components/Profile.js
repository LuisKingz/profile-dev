import React from 'react';
import { Container, Typography, Card, CardContent, Grid, Avatar } from '@mui/material';

const Profile = () => {
  return (
    <Container sx={{ padding: 3 }}>
      <Card
        sx={{
          marginBottom: 2,
          padding: 3,
          backgroundColor: '#ffffff',
          borderRadius: 3,
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          transition: 'transform 0.3s, box-shadow 0.3s',
        }}
      >
        <CardContent>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} sm={4} md={3} sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
              <Avatar
                alt="Luis Fernando"
                src="/path/to/your/photo.jpg"
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
            <Grid item xs={12} sm={8} md={9}>
              <Typography variant="h4" component="h2" gutterBottom>
                Acerca de mí
              </Typography>
              <Typography variant="body1" paragraph>
                Me llamo Luis Fernando y mi objetivo como desarrollador web es ofrecer soluciones ágiles y eficaces mediante el desarrollo de aplicaciones web usando las tecnologías más actuales.
              </Typography>
              <Typography variant="body1" paragraph>
                Estoy en búsqueda de nuevos proyectos que pongan a prueba mis habilidades adquiridas durante mi formación y prácticas profesionales. Durante mi experiencia he desempeñado diversos roles en el proceso de desarrollo de software, incluyendo:
              </Typography>
              <Typography variant="body1" component="div">
                <ul>
                  <li>Planificación, desarrollo y gestión de proyectos según las métricas del PMBOK.</li>
                  <li>Análisis de requisitos para el desarrollo de software.</li>
                  <li>Analista-programador.</li>
                  <li>Administrador de base de datos.</li>
                </ul>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Profile;