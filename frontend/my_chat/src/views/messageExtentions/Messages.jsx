import { useEffect, useRef, useState } from "react";
import Message from "./Message";
import {
  useConversation,
  useConversationState,
} from "../../features/hooks/useConversation";
import { useSetUser } from "../../features/hooks/useUser";
import { useLoading } from "../../features/hooks/useLoading";
import MessageSkelenton from "./MessageSkelenton";

function Messages() {
  const { getConversation } = useConversation();
  const { conversation } = useConversationState();
  const { selectedUser } = useSetUser();
  const [loading, setLoading] = useState(false);
  const lastMessage = useRef();

  useEffect(() => {
    const fetching = async () => {
      setLoading(true);

      try {
        await getConversation(selectedUser._id);
      } catch (error) {
        console.log(error);
        throw error;
      } finally {
        setLoading(false);
      }
    };
    fetching();
  }, [selectedUser]);

  useEffect(() => {
    if (conversation) {
      setTimeout(() => {
        lastMessage.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [conversation]);

  if (!conversation) {
    return (
      <div className="flex-1 px-4 overflow-auto">
        {loading && [...Array(3)].map((_, i) => <MessageSkelenton key={i} />)}
      </div>
    );
  }

  return (
    <div className="flex-1 px-4 overflow-auto">
      {!loading &&
        conversation.length > 0 &&
        conversation.map((message, index) => (
          <div
            key={message._id}
            ref={index === conversation.length - 1 ? lastMessage : null}
          >
            <Message message={message} />
          </div>
        ))}
      {!loading && conversation.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
}

export default Messages;
