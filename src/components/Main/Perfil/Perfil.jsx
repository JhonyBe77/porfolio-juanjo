import React from "react";
import profilePhoto from "../../../assets/fotoJJ2.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPerson, MdSearch, MdLightbulb, MdMood } from "react-icons/md";

import javascriptLogo from '../../../assets/logos/javascript.svg';
import typescriptLogo from '../../../assets/logos/typescript.svg';
import reactLogo from '../../../assets/logos/react.svg';
import sassLogo from '../../../assets/logos/sass.svg';
import nodeLogo from '../../../assets/logos/nodejs.svg';
import expressLogo from '../../../assets/logos/expressjs.svg';
import postgreSQLLogo from '../../../assets/logos/postgres.svg';
import sequelizeLogo from '../../../assets/logos/sequelize.svg';
import mongoDBLogo from '../../../assets/logos/mongoDB.svg';
import mongooseLogo from '../../../assets/logos/mongoose.svg';
import gitLogo from '../../../assets/logos/git.svg';
import githubLogo from '../../../assets/logos/github.svg';
import renderLogo from '../../../assets/logos/render.svg';
import netlifyLogo from '../../../assets/logos/netlify.svg';

const Perfil = () => {
  const cards = [
    {
      id: 1,
      icon: <MdPerson />,
      title: "Soy",
      details: [
        "· Autodidacta y eficaz en el aprendizaje.",
        "· Meticuloso con un toque innovador.",
        "· Constante, adaptable y comprometido con la excelencia.",
      ],
    },
    {
      id: 2,
      icon: <MdSearch />,
      title: "Busco",
      details: [
        "· Enfrentar desafíos que impulsen mi potencial.",
        "· Aprender de manera continua y aplicarlo a proyectos reales.",
        "· Crecer profesionalmente mientras aporto valor.",
      ],
    },
    {
      id: 3,
      icon: <MdLightbulb />,
      title: "Valores",
      details: [
        "· Visión estratégica y enfoque práctico.",
        "· Rapidez sin perder la calidad.",
        "· Habilidad para colaborar y optimizar resultados.",
        "· Soluciones creativas y centradas en el usuario.",
      ],
    },
    {
      id: 4,
      icon: <MdMood />,
      title: "Actitud",
      details: [
        "· Perseverancia para superar retos.",
        "· Flexibilidad para adaptarme a cualquier entorno.",
        "· Pasión por convertir ideas en realidades.",
      ],
    },
  ];

  return (
    <section id="sectionPerfil">
      <div>
        <h3>Mi perfil</h3>
      </div>
      <div>
        <section id="aboutMeInnerSection1" className="aboutMeInnerSection">
          <article>
            <img src={profilePhoto} alt="Juan José Ruipérez" />
            <h7>Juan José Ruipérez</h7>
            <div>
              <a href="mailto:jjruiperezf@gmail.com" className="footerIcon">
                <MdEmail />
              </a>
              <a href="https://github.com/JhonyBe77" target="_blank" rel="noopener noreferrer">
                <FaGithub className="footerIcon" />
              </a>
              <a href="https://www.linkedin.com/in/jjruiperez/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="footerIcon" />
              </a>
            </div>
          </article>
          <article>
            <p>
              Creativo y apasionado profesional con más de <strong>20 años de experiencia</strong> en <strong>branding,
                publicidad y estrategias digitales</strong>. Especializado en el diseño visual
              y desarrollo de campañas integrales que generan impacto y fortalecen la identidad de marca.
            </p>

            <p>
              <strong class="uppercase">Diseño y Producción Audiovisual</strong>.
              Dominio avanzado de herramientas para la creación de contenido innovador:
            </p>
            <ul className="listInfoDos">
              <li>Adobe Suite</li>
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>InDesign</li>
              <li>After Effects</li>
              <li>Premiere Pro</li>
              <li>Cinema4D</li>
            </ul>
            <p>
              <strong class="uppercase">Desarrollador Full Stack</strong> especializado en la creación de aplicaciones <strong>escalables, intuitivas y de alto rendimiento</strong>, con capacidad de adaptación a las tendencias y demandas del sector tecnológico. Experiencia en:
            </p>

            {/* Sección de Logos */}
            <div className="logos-container">
              {[
                // 1️⃣ Esenciales
  { src: javascriptLogo, alt: "Javascript Logo", name: "JavaScript" },
  { src: gitLogo, alt: "Git Logo", name: "Git" },
  { src: githubLogo, alt: "GitHub Logo", name: "GitHub" },

  // 2️⃣ Frontend
  { src: reactLogo, alt: "React Logo", name: "React" },
  { src: typescriptLogo, alt: "Typescript Logo", name: "TypeScript" },
  { src: sassLogo, alt: "Sass Logo", name: "Sass" },

  // 3️⃣ Backend
  { src: nodeLogo, alt: "Node.js Logo", name: "Node.js" },
  { src: expressLogo, alt: "Express Logo", name: "Express" },

  // 4️⃣ Bases de Datos
  { src: postgreSQLLogo, alt: "PostgreSQL Logo", name: "PostgreSQL" },
  { src: sequelizeLogo, alt: "Sequelize Logo", name: "Sequelize" },
  { src: mongoDBLogo, alt: "MongoDB Logo", name: "MongoDB" },
  { src: mongooseLogo, alt: "Mongoose Logo", name: "Mongoose" },

  // 5️⃣ Deployment & Hosting
  { src: renderLogo, alt: "Render Logo", name: "Render" },
  { src: netlifyLogo, alt: "Netlify Logo", name: "Netlify" },
              ].map((logo, index) => (
                <div key={index} className="logo-item">
                  <img src={logo.src} alt={logo.alt} />
                  <span>{logo.name}</span>
                </div>
              ))}
            </div>

            {/* <ul className="listInfoDos">
              <li>React</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>SASS</li>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>CI/CD</li>
            </ul> */}

            <p>
              Resolutivo, con habilidades de liderazgo y un enfoque centrado en resultados medibles.
            </p>
          </article>
        </section>
        {/* Nueva sección con las tarjetas */}
        <section id="aboutMeInnerSection2" className="timeline-container">
          {cards.map((card) => (
            <div key={card.id} className="card">
              <div className="card-front">
                <div className="icon">{card.icon}</div>
                <h6>{card.title}</h6>
              </div>
              <div className="card-back">
                <ul>
                  {card.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export default Perfil;
