import React from "react";

const Button = ({ children }) => {
   return (
      <div className="text-white text-[15px] font-semibold bg-primary hover:bg-[#244034] px-5 py-2 rounded-full cursor-pointer duration-500">
         {children}
      </div>
   );
};

export default Button;
