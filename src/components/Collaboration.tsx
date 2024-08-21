import React from "react";
import OutlinedButton from "./buttons/Outlined";

const Collaboration = () => {
  return (
    <div className="px-20">
      <div className="w-full mt-10 px-20 py-12 text-center">
        <h3 className="text-secondary font-medium text-xl">Collaboration</h3>
        <h1 className="text-9xl font-medium tracking-tighter">
          Let's talk to <br />
          Collaboration
        </h1>
        <div className="space-x-5 mt-10">
          <OutlinedButton title="Get in touch" className="bg-secondary text-black border-secondary hover:text-white font-medium"/>
          <OutlinedButton title="Hire me now" className="font-medium"/>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
