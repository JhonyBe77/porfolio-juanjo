import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion";

import { BiSolidBriefcase } from "react-icons/bi";
import { MdSchool } from "react-icons/md";

const experiences = [
  {
    title: "TEAL Retail Spain",
    date: "2005 | Ag. 2024",
    role: "Director creativo de marketing",
    description: "En TEAL Retail Spain, lideré proyectos de marketing digital, combinando diseño gráfico y publicidad online para crear campañas impactantes. Maqueté catálogos e ilustré elementos vectoriales que capturaron la atención del público, respaldado por más de seis años de experiencia en el ámbito del diseño.",
    responsibilities: [
      "Diseño y ejecución de estrategias de branding y marketing digital.",
      "Creación de materiales publicitarios: cartelería, catálogos, packaging y diseño digital.",
      "Mantenimiento de la web corporativa con HTML5, CSS3, JavaScript, Shopify y Algolia.",
      "Gestión de redes sociales con un aumento del engagement del 30%.",
      "Dirección de equipos creativos y colaboración con departamentos."
    ],
    type: "work"
  },
  {
    title: "Indra",
    date: "2004 | 2005",
    role: "Diseñador Gráfico",
    description: "Diseño digital y audiovisual para proyectos empresariales, incluyendo edición de video y resolución de problemas de imagen para clientes.",
    type: "work"
  },
  {
    title: "Crazy Labs",
    date: "2001 | 2004",
    role: "Diseñador Gráfico",
    description: "Diseño y desarrollo de proyectos visuales exclusivos desde la conceptualización hasta su ejecución final, incluyendo producción de diseños web adaptados a las necesidades del cliente.",
    type: "work"
  },
  {
    title: "Bootcamp FullStack Web Development",
    date: "2024",
    role: "Estudiante | The Bridge",
    description: `Aprendizaje intensivo, enfocándome en la creación de aplicaciones tanto Front-end como Back-end. Durante el curso, he trabajado con tecnologías modernas como React, Node.js, MongoDB y SQL, cubriendo cada aspecto del desarrollo de aplicaciones web.\n\n
    En el Front-end, aprendí a construir interfaces de usuario dinámicas y responsivas usando React, aplicando principios de diseño UX/UI para mejorar la experiencia del usuario. Implementé React Hooks, gestioné el estado de la aplicación y utilicé herramientas como React DevTools para optimizar la experiencia de desarrollo. En el Back-end, me enfoqué en la creación de APIs REST con Node.js y Express, gestionando la autenticación y el control de accesos. Trabajé con bases de datos como MongoDB para estructurar y almacenar datos de manera eficiente, así como con SQL para consultas más complejas.\n\n
    El curso también incluyó una introducción a prácticas de DevOps, como el uso de Docker para la creación de contenedores y Kubernetes para la orquestación, permitiendo que las aplicaciones sean escalables y fácilmente desplegables en entornos cloud. Apliqué CI/CD (Integración y Despliegue Continuos) para automatizar procesos y garantizar la entrega continua de mejoras en las aplicaciones.\n\n
    Además, participé en varios proyectos prácticos donde desarrollé aplicaciones completas, aplicando tecnologías de Front-end y Back-end, y llevé a cabo el despliegue de las aplicaciones en entornos cloud, asegurando su correcto funcionamiento y accesibilidad.`,
    type: "education"
  },

  {
    title: "Máster en Dirección de Marketing, Executive y Gestión Publicitaria",
    date: "2017 | 2018",
    role: "Estudiante | Universidad Americana de Europa",
    description: `Curso avanzado sobre diseño de experiencia de usuario (UX) e interfaz de usuario (UI),
    enfocado en metodologías de diseño centradas en el usuario, wireframing, prototipado y pruebas de usabilidad.`,
    type: "education"
  },
  {
    title: "Grado en Diseño Gráfico",
    date: "1992 | 1995",
    role: "Estudiante | FP Islas Filipinas",
    description: `Formación integral en diseño gráfico con un enfoque en branding, tipografía, ilustración y diseño digital.
    Aprendí herramientas avanzadas como Adobe Creative Suite, diseño editorial y estrategias de comunicación visual.`,
    type: "education"
  }

];

{/* {
    title: "Máster en UX/UI Design",
    date: "2023",
    role: "Estudiante | Ironhack",
    description: `Curso avanzado sobre diseño de experiencia de usuario (UX) e interfaz de usuario (UI), 
    enfocado en metodologías de diseño centradas en el usuario, wireframing, prototipado y pruebas de usabilidad.`,
    type: "education"
  } */}

export default function CustomizedTimeline() {
  return (
    <Timeline id="timeline" sx={{
      p: 2,
      borderRadius: "15px",
      [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0 }
    }}>
      {experiences.map((exp, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot className={exp.type === "work" ? "typeWorkDot" : "typeEducationDot"}>
              {exp.type === "work" ? <BiSolidBriefcase size={24} /> : <MdSchool size={24} />}
            </TimelineDot>
            {index < experiences.length - 1 && <TimelineConnector className={exp.type === "education" ? "educationConnector" : "workConnector"} />}
          </TimelineSeparator>

          <TimelineContent
            className={`timelineContent ${exp.type === "education" ? "educationHover" : "workHover"}`}
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
          >
            <Typography variant="h6">
              <h6 className={`timelineContentTitle ${exp.type === "work" ? "typeWork" : "typeEducation"}`}>
                {exp.title}
              </h6>
            </Typography>
            <div className="generalData">
              <h5>{exp.date} // {exp.role}</h5>
            </div>
            <Typography className="dataText" component="div">
              {exp.description.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
              {exp.responsibilities && (
                <div>
                  <div className="generalData">
                    <h5>Responsabilidades:</h5>
                  </div>
                  <ul>
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
              )}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
