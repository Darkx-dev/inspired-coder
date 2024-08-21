import React from "react";

type OutlinedButtonParams = {
  title: string;
  className?: string;
};

const OutlinedButton = ({ title, className }: OutlinedButtonParams) => {
  return (
    <a
      href="#"
      className={`border w-fit px-6 py-3 ml-auto hover:text-secondary hover:border-secondary transition-colors ${className}`}
    >
      {title}
    </a>
  );
};

export default OutlinedButton;
