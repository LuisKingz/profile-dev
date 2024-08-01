import React, { useContext } from 'react';
import { Container, Typography, Card, CardContent, Grid, LinearProgress, Divider } from '@mui/material';
import { SiReact, SiJavascript, SiCss3, SiHtml5, SiNodedotjs, SiPhp, SiLaravel, SiMongodb, SiMysql, SiPostgresql, SiGit, SiDocker, SiVisualstudio, SiJira, SiNgrok, SiCsharp, SiPython } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { LanguageContext, useTranslation } from '../context/LanguageContext';

const technologies = {
    'Front-End': [
        { header: { en: "Front-End", es: "Front-End" } },
        { name: 'React', value: 90, icon: <SiReact color="#61dafb" /> },
        { name: 'JavaScript', value: 85, icon: <SiJavascript color="#f7df1e" /> },
        { name: 'CSS', value: 80, icon: <SiCss3 color="#1572b6" /> },
        { name: 'HTML', value: 85, icon: <SiHtml5 color="#e34f26" /> },
    ],
    'Back-End': [
        { header: { en: "Back-End", es: "Back-End" } },
        { name: 'Node.js', value: 80, icon: <SiNodedotjs color="#339933" /> },
        { name: 'PHP', value: 75, icon: <SiPhp color="#777bb4" /> },
        { name: 'Laravel', value: 70, icon: <SiLaravel color="#ff2d20" /> },
        { name: 'Java', value: 65, icon: <FaJava color="#007396" /> },
        { name: 'Python', value: 80, icon: <SiPython color="#3776ab" /> },
        { name: 'C#', value: 60, icon: <SiCsharp color="#178600" /> },
    ],
    'Bases de Datos': [
        { header: { en: "Databases", es: "Bases de Datos" } },
        { name: 'MongoDB', value: 85, icon: <SiMongodb color="#47a248" /> },
        { name: 'MySQL', value: 80, icon: <SiMysql color="#4479a1" /> },
        { name: 'PostgreSQL', value: 70, icon: <SiPostgresql color="#336791" /> },
    ],
    'Otras Tecnologías': [
        { header: { en: "Other Technologies", es: "Otras Tecnologías" } },
        { name: 'Git', value: 60, icon: <SiGit color="#f05032" /> },
        { name: 'Docker', value: 5, icon: <SiDocker color="#2496ed" /> },
        { name: 'Visual Studio Code', value: 90, icon: <SiVisualstudio color="#0078d7" /> },
        { name: 'Jira', value: 20, icon: <SiJira color="#0052cc" /> },
        { name: 'Ngrok', value: 100, icon: <SiNgrok color="#008744" /> },
    ],
};


const Technologies = () => {
    const { language } = useContext(LanguageContext);
    const t = useTranslation();
    return (
        <Container id={language === 'en' ? 'technologies' : 'tecnologías'} sx={{ padding: 3 }}>
            <Card
                sx={{
                    marginBottom: 2,
                    padding: 3,
                    backgroundColor: '#f5f5f5',
                    borderRadius: 3,
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                }}
            >
                <CardContent>
                    <Typography variant="h4" component="h2" gutterBottom>
                        { language === 'en' ? 'Technologies' : 'Tecnologías' }
                    </Typography>
                    <Grid container spacing={3}>
                        {Object.keys(technologies).map((category, index) => (
                            <Grid item xs={12} sm={6} key={category}>
                                <Typography variant="h6" component="h3" gutterBottom  key={category + index}>
                                    {
                                        technologies[category][0].header[language]
                                    }
                                </Typography>
                                {technologies[category].slice(1).map((tech) => (
                                    <div key={tech.name} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                                        <div style={{ marginRight: '0.5rem', fontSize: '1.5rem' }}>{tech.icon}</div>
                                        <div style={{ flexGrow: 1 }}>
                                            <Typography variant="body1" component="div" sx={{ marginBottom: 0 }}>
                                                {tech.name}
                                            </Typography>
                                            <LinearProgress key={tech.name} variant="determinate" value={tech.value} sx={{ height: 10, borderRadius: 5, '&:hover': { boxShadow: '0 0 10px 0 rgba(0,0,0,0.5)' } }} />
                                            <Typography variant="caption" color="text.secondary" sx={{ textAlign: 'right' }}>
                                                {tech.value}%
                                            </Typography>
                                        </div>
                                    </div>
                                ))}
                                <Divider sx={{ margin: '1rem 0' }} />
                            </Grid>
                        ))}
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    );
};

export default Technologies;