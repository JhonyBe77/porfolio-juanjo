import React, { useState, useEffect, useContext } from "react";
import { context } from "../../../context/context";
import cv from "../../../../src/assets/CV_JJRuiperez.pdf";
import banner from "../../../assets/ilustra3.jpg";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdArrowDown } from "react-icons/io";

const Home = () => {

  const [gradient, setGradient] = useState("linear-gradient(140deg, rgb(175, 99, 255) 0%, rgba(0,255,176,1) 45%)");
  const { isDark } = useContext(context);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const hue1 = Math.floor((e.clientX / window.innerWidth) * 360);
      const hue2 = Math.floor((e.clientY / window.innerHeight) * 360);

      const pastelColor1 = `hsl(${hue1}, 70%, 80%) 0%`;
      const pastelColor2 = `hsl(${hue2}, 70%, 80%) 40%`;

      setGradient(`linear-gradient(140deg, ${pastelColor1}, ${pastelColor2})`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <>
    <section id="home">
      <article>
        <h1>
          Juanjo Ruipérez
        </h1>
      </article>
      <article>
        <h5>Especialista en Diseño Gráfico | Desarrollador Web Full Stack</h5>
      </article>
      <img src={banner} alt="Juan José Ruipérez Fernández" />
      <article>
        <h4>Bienvenidos</h4>
        <p>Aquí encontrarás una cuidada selección de mis proyectos, donde el diseño y la tecnología se encuentran para dar vida a ideas únicas.</p>
      </article>
      <section>
        <article>
          {/* <a href="mailto:deydrealonso@gmail.com" target="_blank" className="icon"><MdEmail className="footerIcon" /></a> */}
          <a href="https://github.com/JhonyBe77" target="_blank" className="icon"><FaGithub className="footerIcon" /></a>
          <a href="https://www.linkedin.com/in/jjruiperez/" target="_blank" className="icon"><FaLinkedin className="footerIcon" /></a>
        </article>
        <article>
          <a href={cv} download>
            <button>Descargar CV<IoMdArrowDown /></button>
          </a>
        </article>
      </section>

    </section>
  </>;
};

export default Home;
