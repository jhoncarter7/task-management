import React from "react";

interface buttonIF {
  icon?: React.ReactNode;
  children?: string;
  className?: string;
  onClick?: ()=> void;
  type?: "submit" | "reset" | "button";
}

const Button = ({ icon, children, className, onClick, type }: buttonIF) => {
  return (
    <div className={`p-1 md:py-2 px-4 rounded-sm gap-x-2 text-xs md:text-sm flex justify-between items-center cursor-pointer  ${className}`} onClick={onClick} >
      <div>{icon}</div>
      <button type={type}>{children}</button>
    </div>
  );
};

export default Button;
