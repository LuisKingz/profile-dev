import React, { useContext } from 'react';
import { Container, Card, CardContent, Typography, Grid, Box, Avatar } from '@mui/material';
import { FaUniversity, FaGraduationCap } from 'react-icons/fa';
import { LanguageContext, useTranslation } from '../context/LanguageContext';

const Education = () => {

    const { language } = useContext(LanguageContext);
    const t = useTranslation();

    return (
        <Container id={language === 'en' ? 'education' : 'educación'} sx={{ padding: 3 }}>
            <Card sx={{
                marginBottom: 2,
                padding: 3,
                backgroundColor: '#f5f5f5',
                borderRadius: 2,
                boxShadow: '0 3px 5px rgba(0,0,0,0.1)',
            }}>
                <CardContent>
                    <Typography variant="h4" component="h2" gutterBottom>
                        {language === 'en' ? 'Education' : 'Educación'}
                    </Typography>
                    {
                        t('education').map((edu, index) => (
                            <Grid container spacing={2} key={index} sx={{ marginBottom: 4 }}>
                                <Grid item xs={2} md={1}>
                                    <Avatar sx={{ backgroundColor: '#3f51b5', width: 56, height: 56 }}>
                                        <FaUniversity size={32} />
                                    </Avatar>
                                </Grid>
                                <Grid item xs={10} md={11}>
                                    <Box sx={{
                                        borderLeft: '2px solid #3f51b5',
                                        paddingLeft: 2,
                                        position: 'relative',
                                        '&:before': {
                                            content: '""',
                                            position: 'absolute',
                                            left: '-20px',
                                            top: '0',
                                            bottom: '0',
                                            width: '2px',
                                            backgroundColor: '#3f51b5'
                                        }
                                    }}>
                                        <Typography variant="h5" component="h3">
                                            {edu.school}
                                        </Typography>
                                        <Typography variant="subtitle1">
                                            <FaGraduationCap /> {edu.degree} | {edu.period}
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        ))
                    }
                </CardContent>
            </Card>
        </Container>
    );
};

export default Education;
