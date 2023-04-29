import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 mt-auto max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-center gap-5`}
      >
        <div className="w-full">
          <h1 className={`${styles.heroHeadTextHey} text-white`}>
            Hey there! <br />
          </h1>
          <h1 className={`${styles.heroHeadText} text-white`}>
            I'm <span className="text-[#cffc49]">Andrea</span>.
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            I am a master's degree student of chemE,
            <br /> interested in mathematical models,
            <br /> linux and gfx.
          </p>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center intems-center">
        <a href="#about">
          <div className="w-[30px] h-[55px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
