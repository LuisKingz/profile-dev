import React from 'react';
import { Container, Typography, Card, CardContent, Grid, Link } from '@mui/material';
import { Email, Phone, LinkedIn, LocationOn } from '@mui/icons-material';
import { FaSkype } from 'react-icons/fa'

const Contact = () => {
  return (
    <Container>
      <Card sx={{ marginBottom: 2, padding: 3, backgroundColor: '#f5f5f5', borderRadius: 2, boxShadow: '0 3px 5px rgba(0,0,0,0.1)' }}>
        <CardContent>
          <Typography variant="h4" component="h2" gutterBottom>
            Contacto
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Link href="https://join.skype.com/invite/kzzBhwnXdiuN" target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none' }}>
                <Card sx={{
                  padding: 2,
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'transform 0.3s, background-color 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    backgroundColor: '#e0e0e0',
                  },
                }}>
                  <FaSkype className='icon skype primary' fontSize="1.4rem" color='#1976d2' />
                  <div style={{ marginLeft: '1rem' }}> 
                    <Typography variant="h6">Skype</Typography>
                    Luis Reyes
                  </div>
                </Card>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Link href="mailto:lfernandoacevedo57@.gmail.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Card sx={{
                  padding: 2,
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'transform 0.3s, background-color 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    backgroundColor: '#e0e0e0',
                  },
                }}>
                  <Email color="primary" sx={{ marginRight: 2 }} />
                  <div>
                    <Typography variant="h6">Email</Typography>
                    lfernandoacevedo57@.gmail.com
                  </div>
                </Card>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Link href="tel:+52 777 446 2377" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Card sx={{
                  padding: 2,
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'transform 0.3s, background-color 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    backgroundColor: '#e0e0e0',
                  },
                }}>
                  <Phone color="primary" sx={{ marginRight: 2 }} />
                  <div>
                    <Typography variant="h6">Teléfono</Typography>
                    +52 777 446 2377
                  </div>
                </Card>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Link href="https://www.linkedin.com/in/luis-acevedo-r/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Card sx={{
                  padding: 2,
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'transform 0.3s, background-color 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    backgroundColor: '#e0e0e0',
                  },
                }}>
                  <LinkedIn color="primary" sx={{ marginRight: 2 }} />
                  <div>
                    <Typography variant="h6">LinkedIn</Typography>
                    luis-acevedo-r
                  </div>
                </Card>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{
                padding: 2,
                display: 'flex',
                alignItems: 'center',
                transition: 'transform 0.3s, background-color 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  backgroundColor: '#e0e0e0',
                },
              }}>
                <LocationOn color="primary" sx={{ marginRight: 2 }} />
                <div>
                  <Typography variant="h6">Ubicación</Typography>
                  Cuernavaca, Morelos
                </div>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Contact;