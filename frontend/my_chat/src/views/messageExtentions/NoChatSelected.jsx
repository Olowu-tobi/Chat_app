import React from "react";

function NoChatSelected() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="p-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 Tobi Law</p>
        <p>Select a chat to start messaging</p>
      </div>
    </div>
  );
}

export default NoChatSelected;
