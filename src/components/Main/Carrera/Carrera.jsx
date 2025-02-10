import React, { useContext } from "react";
import { context } from "../../../context/context"
import CustomizedTimeline from "./CustomizedTimeline/CustomizedTimeline";

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

const Carrera = () => {

  const { isDark } = useContext(context);

  return <>
    <section id="sectionSkillsCareer">
      <h3>Mis trabajos</h3>
      <article>
        <article className="technologies typeSkills">
        <section>
            <CustomizedTimeline />
          </section>
          {/* <div>
            <div>
              <img src={javascriptLogo} alt="Javascript Logo" />
              <h7>Javascript</h7>
            </div>
            <div>
              <img src={typescriptLogo} alt="Typescript Logo" />
              <h7>Typescript</h7>
            </div>
            <div>
              <img src={reactLogo} alt="React Logo" />
              <h7>React</h7>
            </div>
            <div>
              <img src={sassLogo} alt="Sass Logo" />
              <h7>Sass</h7>
            </div>
            <div>
              <img src={nodeLogo} alt="Node Logo" />
              <h7>Node</h7>
            </div>
            <div>
              <img src={expressLogo} alt="Express Logo" />
              <h7>Express</h7>
            </div>
          </div>
          <div>
            <div>
              <img src={postgreSQLLogo} alt="PostgreSQL Logo" />
              <h7>PostgreSQL</h7>
            </div>
            <div>
              <img src={sequelizeLogo} alt="Sequelize Logo" />
              <h7>Sequelize</h7>
            </div>
            <div>
              <img src={mongoDBLogo} alt="MongoDB Logo" />
              <h7>MongoDB</h7>
            </div>
            <div>
              <img src={mongooseLogo} alt="Mongoose Logo" className="mongo" />
              <h7>Mongoose</h7>
            </div>
            <div>
              <img src={gitLogo} alt="Git Logo" />
              <h7>Git</h7>
            </div>
            <div>
              <img src={githubLogo} alt="Github Logo" />
              <h7>GitHub</h7>
            </div>
            <div>
              <img src={renderLogo} alt="Render Logo" />
              <h7>Render</h7>
            </div>
            <div>
              <img src={netlifyLogo} alt="Netlify Logo" />
              <h7>Netlify</h7>
            </div>
          </div> */}
        </article>

      </article>
      <article>

      </article>
    </section>
  </>;
};

export default Carrera;
