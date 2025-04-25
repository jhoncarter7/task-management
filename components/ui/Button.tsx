import React from "react";

interface buttonIF {
  icon?: React.ReactNode;
  children?: string;
  className?: string;
}

const Button = ({ icon, children, className }: buttonIF) => {
  return (
    <div className={`py-2 px-4 rounded-sm gap-x-2 flex justify-between items-center ${className}`}>
      <div>{icon}</div>
      <button>{children}</button>
    </div>
  );
};

export default Button;
