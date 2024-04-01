import React from "react";
import { useUserState } from "../../features/hooks/useUser";

function Conversation() {
  const { users } = useUserState();

  // Check if users is null or undefined before rendering
  if (!users) {
    return <div>Loading...</div>; // You can show a loading indicator or handle the loading state in another way
  }
  const idx = users.users.length - 1;

  return (
    <>
      {users.users.map((user, i) => (
        <div key={i}>
          <div className="flex gap-2 items-center rounded p-2 py-1 cursor-pointer">
            <div className="avatar online">
              <div className="w-12 rounded-full">
                <img src={user.profile_image} alt="" />
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex gap-3 justify-between">
                <p className="font-bold text-gray-200">
                  {user.first_name} {user.last_name}
                </p>
                <span className="text-xl">🎃</span>
              </div>
            </div>
          </div>
          {i != idx && <div className="divider my-0 py-0 h-1"></div>}
        </div>
      ))}
    </>
  );
}

export default Conversation;
