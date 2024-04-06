import { useDispatch, useSelector } from "react-redux";
import {
  conversationThunk,
  setConversation,
} from "../slices/conversationSlice";

export const useConversation = () => {
  const dispatch = useDispatch();
  const getConversation = (receiverId) =>
    dispatch(conversationThunk(receiverId));
  const setConversations = (message) => {
    dispatch(setConversation(message));
  };

  return {
    getConversation,
    setConversations,
  };
};

export const useConversationState = () => {
  return useSelector((state) => state.messages);
};
