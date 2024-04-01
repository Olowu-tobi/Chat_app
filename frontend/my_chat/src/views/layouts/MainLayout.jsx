import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      {children}
    </div>
  );
};

export default MainLayout;
