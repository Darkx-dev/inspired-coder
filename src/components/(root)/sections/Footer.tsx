import React from "react";

const Footer = () => {
  return (
    <section className="mt-10 px-20 pb-5 max-md:px-4" id="section-contact">
      <div className="flex justify-between border-t-2 border-gray-light pt-10">
        {/* <p></p> */}
        <h4 className="mt-auto text-gray-light">
          @Roshan Kumar. All right reserver 2024
        </h4>
        <ul className="space-y-2 text-end *:*:transition-colors hover:*:*:text-secondary">
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
    </section>
  );
};

export default Footer;
