import React from 'react';
import { Container, Typography, Card, CardContent, Grid, Chip } from '@mui/material';
import { styled } from '@mui/system';

const projects = [
    {
        name: 'Proyecto 1',
        description: 'Descripción breve del proyecto 1.',
        technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
        name: 'Proyecto 2',
        description: 'Descripción breve del proyecto 2.',
        technologies: ['PHP', 'Laravel', 'MySQL']
    },
    // Agrega más proyectos aquí
];

const CardContainer = styled(Card)(({ theme }) => ({
    transition: 'transform 0.3s',
    cursor: 'pointer',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
    }
}));

const Projects = () => {
    return (
        <Container id="projects" sx={{ padding: 3 }}>
            <Typography variant="h4" component="h2" gutterBottom>
                Proyectos
            </Typography>
            <Grid container spacing={3}>
                {projects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <CardContainer>
                            <CardContent>
                                <Typography variant="h5" component="h3" gutterBottom>
                                    {project.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" gutterBottom>
                                    {project.description}
                                </Typography>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                                    {project.technologies.map((tech, index) => (
                                        <Chip
                                            key={index}
                                            label={tech}
                                            variant="outlined"
                                            cursor="pointer"
                                            sx={{
                                                borderColor: '#3f51b5',
                                                color: '#3f51b5',
                                                '&:hover': {
                                                    backgroundColor: '#3f51b5',
                                                    color: '#fff',
                                                }
                                            }}
                                        />
                                    ))}
                                </div>
                            </CardContent>
                        </CardContainer>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Projects;
