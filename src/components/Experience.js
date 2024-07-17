import React from 'react';
import { Container, Typography, Card, CardContent, Grid } from '@mui/material';

const Experience = () => {
  return (
    <Container>
      <Card sx={{ marginBottom: 2 }}>
        <CardContent>
          <Typography variant="h4" component="h2" gutterBottom>
            Experiencia Profesional
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h5" component="h3">
                SEMICMEX PF
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Desarrollador web | Junio 2022 – Actualidad
              </Typography>
              <Typography variant="body1">
                Mejora y actualización continua de los sistemas internos para garantizar la satisfacción del usuario.
              </Typography>
              <Typography variant="body1">
                Análisis detallado de requisitos para garantizar la exactitud de la implementación.
              </Typography>
              <Typography variant="body1">
                Gestión de Bases de Datos mediante Mongo.
              </Typography>
              <Typography variant="body1">
                Competencia en diversas herramientas tecnológicas como son React JS, React Native, Jquery, DataTables Js, Node JS, Laravel, php C#, Java.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom>
                Logros:
              </Typography>
              <ul>
                <li>Refactoricé el código para la creación de reportes en PDF, mejorando el rendimiento y reduciendo el tiempo de generación en un 80%. Además, implementé una nueva interfaz para este proceso, eliminando la necesidad de ingresar directamente al código.</li>
                <li>Diseñé y desarrollé un prototipo de reproductor de video, integrando tecnología OCR para la detección de caracteres en las placas de vehículos, mejorando la precisión de la lectura de datos en un 50%.</li>
                <li>Implementé un nuevo proceso de autenticación y seguridad, aumentando la protección y mejorando la experiencia de ingreso a los sistemas, reduciendo los intentos de acceso no autorizado.</li>
              </ul>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Experience;