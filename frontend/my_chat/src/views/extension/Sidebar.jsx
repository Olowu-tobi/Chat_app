import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import Logout from "./Logout";

function Sidebar() {
  return (
    <div className="p-4 border-slate-500 border-r flex flex-col">
      <SearchInput />
      <div className="divider p-3"></div>
      <Conversations />
      <Logout />
    </div>
  );
}

export default Sidebar;
