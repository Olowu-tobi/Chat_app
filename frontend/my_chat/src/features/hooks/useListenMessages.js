import { useEffect } from "react";
import { useConversation } from "./useConversation";
import { useSocketContext } from "../socketContext/socketContext";
import notificationSound from "../../assets/sound/42289_download_iphone_ding_ringtone_apple_sms_ringtones.mp3";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { setConversations } = useConversation();
  useEffect(() => {
    if (!socket) return;
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;
      const sound = new Audio(notificationSound);
      sound.play();
      setConversations(newMessage);
    });
    return () => socket?.off("newMessage");
  }, [socket, setConversations]);
};

export default useListenMessages;
