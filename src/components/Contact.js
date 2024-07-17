import React from 'react';
import { Container, Typography, Card, CardContent, List, ListItem, ListItemText, Link } from '@mui/material';

const Contact = () => {
  return (
    <Container>
      <Card sx={{ marginBottom: 2 }}>
        <CardContent>
          <Typography variant="h4" component="h2" gutterBottom>
            Contacto
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Skype" secondary="tu_skype" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Email" secondary="tu_email@example.com" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Teléfono" secondary="+52 123 456 7890" />
            </ListItem>
            <ListItem>
              <ListItemText primary="LinkedIn" secondary={<Link href="https://www.linkedin.com/in/tu-linkedin" target="_blank" rel="noopener noreferrer">tu-linkedin</Link>} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Ubicación" secondary="Cuernavaca, Morelos" />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Contact;