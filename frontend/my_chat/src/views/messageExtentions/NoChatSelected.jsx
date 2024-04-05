import React from "react";
import { useUserState } from "../../features/hooks/useUser";

function NoChatSelected() {
  const { profile } = useUserState();

  if (!profile) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }
  const user = profile.user[0];
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="p-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {`${user.first_name} ${user.last_name}`}</p>
        <p>Select a chat to start messaging</p>
      </div>
    </div>
  );
}

export default NoChatSelected;
