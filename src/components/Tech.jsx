import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>TECHNOLOGIES</p>
        <h2 className={styles.sectionHeadTextAbout}>My Tools.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.2, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I always try to update my tools and to learn new things, anyways I
          usually like to come up with my own solutions and to use what I
          already have in my background to be as efficient as possible.
        </motion.p>
      </div>
      <motion.div
        variants={textVariant()}
        className="flex flex-row flex-wrap justify-center mt-16"
      >
        {technologies.map((technology) => (
          <div
            className="w-40 h-40 flex justify-center items-center"
            key={technology.name}
          >
            <BallCanvas icon={technology.icon} exp={technology.exp} />
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "");
