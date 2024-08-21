import React from "react";

const Footer = () => {
  return (
    <div className="px-20 max-md:px-4 mt-10 pb-5">
      <div className="border-t-2 pt-10 border-gray-light flex justify-between">
        {/* <p></p> */}
        <h4 className="text-gray-light mt-auto">
          @Roshan Kumar. All right reserver 2024
        </h4>
        <ul className="text-end space-y-2 hover:*:*:text-secondary *:*:transition-colors">
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">Linkedin</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
