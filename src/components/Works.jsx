import React, { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, star } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { textVariant } from "../utils/motion";

const ProjectCard = ({ name, description, tags, image, source_code_link }) => (
  <Tilt
    options={{
      max: 15,
      scale: 1,
      speed: 450,
    }}
    className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-auto shadow-card"
  >
    <div>
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
        />

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() =>
              window.open(`https://github.com/${source_code_link}`, "_blank")
            }
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>
      <div className="mt-4 flex flex-wrap justify-between">
        <div className="flex flex-wrap gap-2 items-center mt-0.5">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        <div className="flex gap-3 items-center">
          <img src={star} className="object-contain w-4 h-4" />
          <Stars repo={source_code_link} />
        </div>
      </div>
    </div>
  </Tilt>
);

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadTextWork}`}>Projects.</h2>
      </motion.div>

      <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
        Following projects showcases my skills and experience through my chemE
        journey or personal hobbies. Each project is briefly described with
        links to code repositories. It reflects my ability in wasting time, work
        with different technologies, and manage projects with unusual and low
        performance solutions.
      </p>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

function Stars({ repo }) {
  const [Data, setData] = useState([]);
  const site = `https://api.github.com/repos/${repo}`;
  const fetchData = (site) => {
    return fetch(site)
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    fetchData(site);
  }, []);

  return (
    <p className="text-secondary font-medium mt-0.5 mr-1">
      {Data.stargazers_count}
    </p>
  );
}

export default SectionWrapper(Works, "work");
