import React from "react";
import Conversation from "./Conversation";

function Conversations({ searchQuery }) {
  return (
    <div className="py-2 flex-col flex overflow-auto">
      <Conversation searchQuery={searchQuery} />
    </div>
  );
}

export default Conversations;
