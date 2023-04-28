import React from "react";

const Ball = (props) => {
  return <img src={props.imgUrl} className="w-14 h-14" />;
};

const BallCanvas = ({ icon }) => {
  return (
    <div className="green-grey-gradient p-[4px] w-24 h-24 rounded-full flex justify-center items-center">
      <div className="bg-primary w-full h-full rounded-full flex justify-center items-center">
        <Ball imgUrl={icon} />
      </div>
    </div>
  );
};

export default BallCanvas;
