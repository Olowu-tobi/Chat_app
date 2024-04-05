/* eslint-disable react/prop-types */
import React from "react";
import { useSetUser, useUserState } from "../../features/hooks/useUser";

function Conversation({ searchQuery }) {
  const { users } = useUserState();
  const { selectedUser, setUsers } = useSetUser();
  const handleUser = (user) => {
    setUsers(user);
  };

  if (!users) {
    return <div>Loading...</div>;
  }

  const filteredUsers = users.users.filter(
    (user) =>
      user.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.last_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedUsers = filteredUsers.sort((a, b) => {
    return a.first_name.localeCompare(b.first_name);
  });
  const idx = sortedUsers.length - 1;

  return (
    <>
      {sortedUsers.map((user, i) => (
        <div key={i}>
          <div
            className={`flex gap-2 items-center rounded p-2 py-1 cursor-pointer ${
              user == selectedUser && "bg-sky-500"
            }`}
            onClick={() => handleUser(user)}
          >
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
