import { createContext, useContext, useEffect, useState } from "react";
import { useUserState } from "../hooks/useUser";
import { io } from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { profile } = useUserState();
  const user = profile?.user[0];
  useEffect(() => {
    if (user) {
      const socket = io("https://chatapp-lemon-mu.vercel.app", {
        query: {
          userId: user._id,
        },
      });
      console.log(socket);
      setSocket(socket);

      socket.on("onlineUsers", (user) => {
        setOnlineUsers(user);
      });

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }

    return () => socket?.close;
  }, [user]);
  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
