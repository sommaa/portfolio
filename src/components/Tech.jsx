import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center">
      {technologies.map((technology) => (
        <div
          className="w-40 h-40 bg-gradient-radial from-primary via-[#464044] to-primary to-50% flex justify-center items-center"
          key={technology.name}
        >
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
