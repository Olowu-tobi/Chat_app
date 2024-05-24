/* eslint-disable react/prop-types */
import { useSetUser, useUserState } from "../../features/hooks/useUser";
import { extractTime } from "../../utils/getTime";

function Message({ message }) {
  const { profile } = useUserState();
  const authUser = profile.user[0];
  const { selectedUser } = useSetUser();
  const senderId = message.senderId == authUser._id;
  const isBotMessage = message.senderId === "bot";
  const chatClass = senderId ? "chat-end" : "chat-start";
  const profilePic = senderId
    ? authUser.profile_image
    : selectedUser.profile_image;
  const bgColor = senderId ? "bg-blue-500" : isBotMessage ? "bg-gray-500" : "";
  const formattedDate = extractTime(message.createdAt);
  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClass} `}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src={isBotMessage ? "bot-profile-image-url" : profilePic}
            alt=""
          />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bgColor}  ${shakeClass}`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {formattedDate}
      </div>
    </div>
  );
}

export default Message;
