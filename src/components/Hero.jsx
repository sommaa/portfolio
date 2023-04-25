import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[140px] max-w-7xl mx-auto flex flex-row items-start gap-6`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hey there! <br />
            I'm <span className="text-[#cffc49]">Andrea</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a master's degree student of chemE,
            <br /> interested in mathematical models,
            <br /> linux and gfx.
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center intems-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
