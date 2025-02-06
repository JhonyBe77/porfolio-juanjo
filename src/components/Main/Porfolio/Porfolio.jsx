import React, { useContext } from "react";
import { context } from "../../../context/context";

import imgOptica from "../../../assets/porfolio_imgs/appOptica.png";
import imgPixelist from "../../../assets/porfolio_imgs/optica.png";
import imgChatbot from "../../../assets/porfolio_imgs/felgtbi.png";
import imgConectic from "../../../assets/porfolio_imgs/conectic4.png";

import { MdOpenInNew } from "react-icons/md";
import techLogos from "./techLogos";

const projectsData = [
  {
    id: "optica",
    title: "APP Óptica O-Q",
    description: "Web para ópticos y clientes, con navegación intuitiva, gestión de favoritos y diseño responsivo.",
    details: "Bootcamp Fullstack. Diseño y desarrollo de interfaz y código realizados con:",
    features: ["Categorías", "Scraping", "Buscador", "API externa", "Sistema de login", "Sistema de favoritos", "UI/UX"],
    img: imgOptica,
    link: "https://pixelist.onrender.com/",
    tech: ["react", "sass", "node", "express", "postgresql"],
  },
  {
    id: "chatbot",
    title: "CHATBOT FELGTBIQ",
    description: "Chatbot intuitivo y accesible que ofrece atención y orientación sobre el VIH, además de estadísticas anonimizadas de las respuestas.",
    details: "Bootcamp Fullstack. Diseño y desarrollo de interfaz y código realizados con:",
    features: ["Chatbot Real","Formularios con Chatbot", "DoList", "Login", "UI/UX"],
    img: imgChatbot,
    link: "https://chatbot-felgtbiq-front.onrender.com/",
    tech: ["react", "sass", "node", "express", "postgresql"],
  },
  {
    id: "jobOffers",
    title: "FREELANCE JOB OFFERS",
    description: "Web para buscar trabajos como freelance mediante scraping. Rol admin para crear ofertas adicionales.",
    details: "Trabajo en equipo para Bootcamp Fullstack.",
    features: ["Sistema de login + Google", "Scraping", "Sistema de favoritos", "UI/UX", "Buscador"],
    img: imgConectic,
    link: "https://backendfinalproject-nbhl.onrender.com/",
    tech: ["pug", "css", "node", "express", "postgresql"],
  },

];

const Porfolio = () => {
  const { isDark } = useContext(context);

  return (
    <section id="sectionProjects">
      <h3>Algunos Proyectos</h3>
      <div className="projectsGrid">
        {projectsData.map(({ id, title, description, details, features, img, link, tech }) => (
          <article key={id} className="projectCard">
            <img src={img} alt={`Captura de ${title}`} />
            <div className="cardContent">
              <h4>{title}</h4>
              <p>{description}</p>
              <p>{details}</p>
              <div className="titleLogos">
                <ul>
                  {tech.map((techName) => (
                    <li key={techName}>
                      <img
                        src={techLogos[techName]?.light}
                        alt={`${techName} Logo`}
                        className="logoMini"
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <ul className="listInfo">
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              {/* <a href={link} target="_blank" rel="noopener noreferrer">
                <button>
                  Ver online <MdOpenInNew />
                </button>
              </a> */}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Porfolio;
