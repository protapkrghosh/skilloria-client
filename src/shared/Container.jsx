import React from "react";

const Container = ({ children }) => {
   return (
      <div className="sm:px-3 md:px-6 lg:px-10 xl:px-12 2xl:px-16">
         {children}
      </div>
   );
};

export default Container;
