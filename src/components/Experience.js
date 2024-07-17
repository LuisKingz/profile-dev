import React from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExperienceV2 = () => {
  return (
    <Container sx={{ marginBottom: 3 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Experiencia Profesional
      </Typography>
      {/* SEMICMEX */}
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">SEMICMEX PF</Typography>
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
            Desarrollador web | Junio 2022 – Actualidad
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
              Desarrollador web | Junio 2022 – Actualidad
            </Typography>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom>
                Actividades:
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
                <li>Participé en el desarrollo de un software para llevar la gestion de los vehiculos de la empresa, mejorando la administración de la información.</li>
                <li>Participé en la identificación y resolución de errores en el sistema de recursos humanos.</li>
              </ul>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      {/* AccionTi */}
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">AccionTi</Typography>
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
            Desarrollador web (practicante) | Enero 2021 – Abril 2021
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
              Desarrollador web (practicante) | Enero 2021 – Abril 2021
            </Typography>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom>
                Actividades:
              </Typography>
              <Typography variant="body1">
                Liderazgo eficiente de los proyectos internos: administración y dirección de proyectos.
              </Typography>
              <Typography variant="body1">
                Análisis de requisitos del sistema: conocimiento en el distinguir y comprensión de requerimientos.
              </Typography>
              <Typography variant="body1">
                Desarrollo Back-End: creación de soluciones robustas y escalables.
              </Typography>
              <Typography variant="body1">
                Habilidad en análisis y gestión de bases de datos: competencia en el diseño, implementación y optimización de bases de datos.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom>
                Logros:
              </Typography>
              <ul>
                <li>Implementé el software ERP Odoo Community, mejorando la interacción con los clientes mediante una interfaz más intuitiva y funcionalidades avanzadas. Esta implementación también redujo los costos de adquisición de software en un 40% al eliminar la necesidad de soluciones propietarias costosas.</li>
                <li>Desarrollé un sistema integral para la gestión de proyectos internos, permitiendo un seguimiento detallado del tiempo de tareas de los usuarios. Esto facilitó la identificación de cuellos de botella y la optimización de procesos, resultando en una reducción significativa de costos operativos.</li>
              </ul>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      {/* Ayuntamiento de Temixco */}
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">Ayuntamiento de Temixco</Typography>
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
            Desarrollador web (practicante) | Mayo 2019 – Agosto 2019
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
              Desarrollador web (practicante) | Mayo 2019 – Agosto 2019
            </Typography>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom>
                Actividades:
              </Typography>
              <Typography variant="body1">
                <b>Análisis de requisitos de sistema:</b> identificación y documentación precisa de los requisitos, garantizando una base sólida para el desarrollo de soluciones eficaces.
              </Typography>
              <Typography variant="body1">
                Análisis y modelado de bases de datos utilizando el gestor de MySQL, asegurando la eficacia y la integración de los datos.
              </Typography>
              <Typography variant="body1">
                <b>Desarrollo del Módulo de gestión de usuarios:</b> administración eficiente y segura de usuarios, mejorando la usabilidad y la seguridad del sistema en general.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom>
                Logros:
              </Typography>
              <ul>
                <li>Contribuí al desarrollo de un nuevo sistema en colaboración con varios programadores, enfocándome en el módulo de inicio de sesión, lo que mejoró la experiencia del usuario, proporcionó una plataforma más actualizada y eficaz, y aumentó la escalabilidad del sistema.</li>
                <li>Identifiqué y diseñé la base de datos para el sistema, mejorando la percepción y documentación de las tablas y sus relaciones, lo que no estaba presente en el sistema anterior.</li>

              </ul>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      {/* Servicios de Salud Morelos (SSM) */}
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">Servicios de Salud Morelos (SSM)</Typography>
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
            Servicio Social | Mayo 2016 – Septiembre 2016
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
              Servicio Social | Mayo 2016 – Septiembre 2016
            </Typography>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom>
                Actividades:
              </Typography>
              <Typography variant="body1">
                Rol administrativo en la Dirección de Atención Medica (DAM).
              </Typography>
              <Typography variant="body1">
                Captura y digitalización de documentos internos: Conversión de documentos físicos en formatos digitales, mejorando la accesibilidad y la organización de la información.
              </Typography>
              <Typography variant="body1">
                Diseño y creación de diagramas de flujo: Uso de herramientas visuales para representar procesos de manera clara y concisa, facilitando la compresión y optimización de los procedimientos internos y para los procesos del Hospital General de Cuernavaca “Dr. José G. Parres”.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom>
                Logros:
              </Typography>
              <ul>
                <li></li>
                <li></li>

              </ul>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default ExperienceV2;
