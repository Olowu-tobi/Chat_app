import React from "react";

function Preloader() {
  return (
    <div className="flex justify-center items-center fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-200"></div>
    </div>
  );
}

export default Preloader;
