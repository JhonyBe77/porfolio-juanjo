import React, { useContext, useState } from "react";
import { context } from "../../../context/context";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import imgOptica from "../../../assets/porfolio_imgs/appOptica.png";
import imgChatbot from "../../../assets/porfolio_imgs/felgtbi.png";
import imgConectic from "../../../assets/porfolio_imgs/conectic4.png";

import { MdOpenInNew } from "react-icons/md";
import techLogos from "./techLogos";

// Importar imágenes de diseño gráfico
import proyecto1 from "../../../assets/desing/proyecto1.jpg";
import proyecto2 from "../../../assets/desing/proyecto2.jpg";
import proyecto3 from "../../../assets/desing/proyecto3.jpg";
import proyecto4 from "../../../assets/desing/proyecto4.jpg";
import proyecto5 from "../../../assets/desing/proyecto5.jpg";
import proyecto6 from "../../../assets/desing/proyecto6.jpg";
import proyecto7 from "../../../assets/desing/proyecto7.jpg";
import proyecto8 from "../../../assets/desing/proyecto8.jpg";
import proyecto9 from "../../../assets/desing/proyecto9.jpg";
import proyecto10 from "../../../assets/desing/proyecto10.jpg";
import proyecto11 from "../../../assets/desing/proyecto11.jpg";
import proyecto12 from "../../../assets/desing/proyecto12.jpg";
import proyecto13 from "../../../assets/desing/proyecto13.jpg";
import proyecto14 from "../../../assets/desing/proyecto14.jpg";
import proyecto15 from "../../../assets/desing/proyecto15.jpg";
import proyecto16 from "../../../assets/desing/proyecto16.jpg";
import proyecto17 from "../../../assets/desing/proyecto17.jpg";
import proyecto18 from "../../../assets/desing/proyecto18.jpg";
import proyecto19 from "../../../assets/desing/proyecto19.jpg";
import proyecto20 from "../../../assets/desing/proyecto20.jpg";
import proyecto21 from "../../../assets/desing/proyecto21.jpg";
import proyecto22 from "../../../assets/desing/proyecto22.jpg";
import proyecto23 from "../../../assets/desing/proyecto23.jpg";
import proyecto24 from "../../../assets/desing/proyecto24.jpg";
import proyecto25 from "../../../assets/desing/proyecto25.jpg";
import proyecto26 from "../../../assets/desing/proyecto26.jpg";
import proyecto27 from "../../../assets/desing/proyecto27.jpg";
import proyecto28 from "../../../assets/desing/proyecto28.jpg";
import proyecto29 from "../../../assets/desing/proyecto29.jpg";
import proyecto30 from "../../../assets/desing/proyecto30.jpg";
import proyecto31 from "../../../assets/desing/proyecto31.jpg";
import proyecto32 from "../../../assets/desing/proyecto32.jpg";



// Datos de los proyectos web
const projectsData = [
  {
    id: "optica",
    title: "APP Óptica O-Q",
    description: "Plataforma integral para ópticos y clientes, diseñada para explorar monturas de forma intuitiva y gestionar favoritos. Con un diseño moderno y responsivo, garantiza una experiencia fluida y accesible.",
    details: "Bootcamp Fullstack. Diseño y desarrollo de interfaz y código realizados con:",
    features: ["Categorías", "Scraping", "Buscador", "API externa", "Sistema de login", "Sistema de favoritos", "UI/UX"],
    img: imgOptica,
    link: "https://",
    tech: ["react", "node", "sass",  "postgresql", "express"],
  },
  {
    id: "chatbot",
    title: "FELGTBIQ CHATBOT",
    description: "'Vihsible' es un verdadero chatbot con IA (LLM) para desestigmatizar y dar información sobre el vih. Usa dos bases de datos y un formulario dinámico de la FELGTBI+.",
    details: "En colaboración con compañeros de Fullstack + DATA + Ciberseguridad.",
    features: ["Chatbot Real", "Formularios con Chatbot", "DoList", "Login", "UI/UX"],
    img: imgChatbot,
    link: "https://",
    tech: ["react", "node", "sass",  "postgresql", "express"],
},

  {
    id: "eventos",
    title: "CONNECTIC4 EVENTOS TECH",
    description: "Plataforma para encontrar eventos de programación, facilitando la conexión entre profesionales, el networking y el crecimiento de la comunidad tech.",
    details: "En colaboración con compañeros de Fullstack.",
    features: ["Sistema de login + Google", "Scraping", "Sistema de favoritos", "UI/UX", "Buscador"],
    img: imgConectic,
    link: "https://",
    tech: ["node", "pug", "css",  "postgresql", "express"],
  },
];

// Datos de la galería de diseño gráfico con título y descripción
const designProjects = [
  { src: proyecto13 },
  { src: proyecto14 },
  { src: proyecto15 },
  { src: proyecto16 },

  { src: proyecto1 },
  { src: proyecto2 },
  { src: proyecto3 },
  { src: proyecto4 },

  { src: proyecto17 },
  { src: proyecto18 },
  { src: proyecto19 },
  { src: proyecto20 },

  { src: proyecto5 },
  { src: proyecto6 },
  { src: proyecto7 },
  { src: proyecto8 },

  { src: proyecto21 },
  { src: proyecto22 },
  { src: proyecto23 },
  { src: proyecto24 },

  { src: proyecto9 },
  { src: proyecto10 },
  { src: proyecto11 },
  { src: proyecto12 },
  
  { src: proyecto25 },
  { src: proyecto26 },
  { src: proyecto27 },
  { src: proyecto28 },
  
  { src: proyecto29 },
  { src: proyecto30 },
  { src: proyecto31 },
  { src: proyecto32 },
];

const Porfolio = () => {
  const { isDark } = useContext(context);

  // Estado para manejar el Lightbox
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
     {/* Sección de Diseño Gráfico */}
     <section id="sectionDesign">
        <h3>Diseño Gráfico</h3>
        <div className="designGallery">
          {designProjects.map((image, idx) => (
            <img
              key={idx}
              src={image.src}
              alt={`Proyecto de diseño ${idx + 1}`}
              className="galleryItem"
              onClick={() => {
                setIndex(idx);
                setIsOpen(true);
              }}
            />
          ))}
        </div>

        {isOpen && (
          <Lightbox
          slides={designProjects.map((item) => ({
            src: item.src,
            title: item.title,
            description: item.description,
          }))}
          open={isOpen}
          index={index}
          close={() => setIsOpen(false)}
        />        
        )}
      </section>
      {/* Sección de Proyectos Web */}
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
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Porfolio;
