import React from "react";
import OutlinedButton from "./buttons/Outlined";

const Collaboration = () => {
  return (
    <div className="px-20 max-md:px-4">
      <div className="w-full mt-10 px-20 py-12 text-center flex flex-col items-center ">
        <h3 className="text-secondary font-medium text-xl">Collaboration</h3>
        <h1 className="text-9xl max-md:text-5xl  font-medium tracking-tighter">
          Let&apos;s talk to <br />
          Collaboration
        </h1>
        <div className="flex max-md:flex-col gap-5  mt-10">
          <OutlinedButton title="Get in touch" className="bg-secondary text-black border-secondary hover:text-white font-medium"/>
          <OutlinedButton title="Hire me now" className="font-medium"/>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
