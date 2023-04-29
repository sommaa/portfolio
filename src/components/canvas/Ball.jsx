import React from "react";
import { Tilt } from "react-tilt";

const Ball = (props) => {
  return <img src={props.imgUrl} className="w-14 h-14" />;
};

const Experience = (props) => {
  if (props.imgExp < 2) {
    return (
      <>
        <dev className="mt-1 mb-1 rounded-full bg-[#cffc49] w-3 h-3" />
        <dev className="mt-1 mb-1 rounded-full bg-primary border-2 border-[#cffc49] w-3 h-3" />
        <dev className="mt-1 mb-1 rounded-full bg-primary border-2 border-[#cffc49] w-3 h-3" />
        <dev className="mt-1 mb-1 rounded-full bg-primary border-2 border-[#cffc49] w-3 h-3" />
        <dev className="mt-1 mb-1 rounded-full bg-primary border-2 border-[#cffc49] w-3 h-3" />
      </>
    );
  }
  if (props.imgExp < 3) {
    return (
      <>
        <dev className="mt-1 mb-1 rounded-full bg-[#cffc49] w-3 h-3" />
        <dev className="mt-1 mb-1 rounded-full bg-[#cffc49] w-3 h-3" />
        <dev className="mt-1 mb-1 rounded-full bg-primary border-2 border-[#cffc49] w-3 h-3" />
        <dev className="mt-1 mb-1 rounded-full bg-primary border-2 border-[#cffc49] w-3 h-3" />
        <dev className="mt-1 mb-1 rounded-full bg-primary border-2 border-[#cffc49] w-3 h-3" />
      </>
    );
  }
  if (props.imgExp < 4) {
    return (
      <>
        <dev className="mt-1 mb-1 rounded-full bg-[#cffc49] w-3 h-3" />
        <dev className="mt-1 mb-1 rounded-full bg-[#cffc49] w-3 h-3" />
        <dev className="mt-1 mb-1 rounded-full bg-[#cffc49] w-3 h-3" />
        <dev className="mt-1 mb-1 rounded-full bg-primary border-2 border-[#cffc49] w-3 h-3" />
        <dev className="mt-1 mb-1 rounded-full bg-primary border-2 border-[#cffc49] w-3 h-3" />
      </>
    );
  }
  if (props.imgExp < 5) {
    return (
      <>
        <dev className="mt-1 mb-1 rounded-full bg-[#cffc49] w-3 h-3" />
        <dev className="mt-1 mb-1 rounded-full bg-[#cffc49] w-3 h-3" />
        <dev className="mt-1 mb-1 rounded-full bg-[#cffc49] w-3 h-3" />
        <dev className="mt-1 mb-1 rounded-full bg-[#cffc49] w-3 h-3" />
        <dev className="mt-1 mb-1 rounded-full bg-primary border-2 border-[#cffc49] w-3 h-3" />
      </>
    );
  }
  if (props.imgExp >= 5) {
    return (
      <>
        <dev className="mt-1 mb-1 rounded-full bg-[#cffc49] w-3 h-3" />
        <dev className="mt-1 mb-1 rounded-full bg-[#cffc49] w-3 h-3" />
        <dev className="mt-1 mb-1 rounded-full bg-[#cffc49] w-3 h-3" />
        <dev className="mt-1 mb-1 rounded-full bg-[#cffc49] w-3 h-3" />
        <dev className="mt-1 mb-1 rounded-full bg-[#cffc49] w-3 h-3" />
      </>
    );
  }
};

const BallCanvas = ({ icon, exp }) => {
  return (
    <div>
      <Tilt className="flex justify-center items-center">
        <Ball imgUrl={icon} />
      </Tilt>
      <div className="flex justify-center mt-6 bg bg-primary rounded-full gap-1">
        <Experience imgExp={exp} />
      </div>
    </div>
  );
};

export default BallCanvas;
