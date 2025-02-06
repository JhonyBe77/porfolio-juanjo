import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return <footer>
    <p>Juan José Ruipérez Fernández · Especialista en Diseño Gráfico | Desarrollador Web Full Stack</p>
    <section>
      <article>
        <a href="mailto:jjruiperezf@gmail.com">Contacto</a>
      </article>
      <article>
        <a href="https://github.com/JhonyBe77" target="_blank"><FaGithub className="footerIcon" /></a>
        <a href="https://www.linkedin.com/in/jjruiperez/" target="_blank"><FaLinkedin className="footerIcon" /></a>
      </article>
    </section>
  </footer>;
};

export default Footer;
