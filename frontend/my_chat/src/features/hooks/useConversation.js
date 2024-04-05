import { useDispatch, useSelector } from "react-redux";
import { conversationThunk } from "../slices/conversationSlice";

export const useConversation = () => {
  const dispatch = useDispatch();
  const getConversation = (receiverId) =>
    dispatch(conversationThunk(receiverId));

  return {
    getConversation,
  };
};

export const useConversationState = () => {
  return useSelector((state) => state.messages);
};
