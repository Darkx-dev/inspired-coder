import React from "react";
import { project } from "./ProjectList";

const Card = ({name, repoUrl, liveUrl, imgUrl}: project) => {
  return <div className="flex justify-center items-center h-full " style={{background: `url(${imgUrl})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>{name}</div>;
};

export default Card;
