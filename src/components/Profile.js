import React from 'react';
import { Container, Typography, Card, CardContent, Grid, Avatar } from '@mui/material';

const Profile = () => {
  return (
    <Container>
      <Card sx={{ marginBottom: 2, padding: 3, backgroundColor: '#f5f5f5' }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item>
              <Avatar 
                alt="Luis Fernando" 
                src="/path/to/your/photo.jpg" 
                sx={{ width: 100, height: 100 }}
              />
            </Grid>
            <Grid item xs>
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