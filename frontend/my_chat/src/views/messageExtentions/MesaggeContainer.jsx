import { useEffect } from "react";
import { useSetUser } from "../../features/hooks/useUser";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import NoChatSelected from "./NoChatSelected";

function MesaggeContainer() {
  useEffect(() => {
    return setUsers(null);
  }, []);
  const { selectedUser, setUsers } = useSetUser();

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedUser ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To:</span>
            <span className="text-gray-900 font-bold">
              {selectedUser.first_name} {selectedUser.last_name}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}

export default MesaggeContainer;
