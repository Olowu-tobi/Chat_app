import { useState } from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import Logout from "./Logout";

function Sidebar() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="p-4 border-slate-500 border-r flex flex-col">
      <SearchInput setSearchQuery={setSearchQuery} />
      <div className="divider p-3"></div>
      <Conversations searchQuery={searchQuery} />
      <Logout />
    </div>
  );
}

export default Sidebar;
