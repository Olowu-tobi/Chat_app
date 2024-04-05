import { useDispatch } from "react-redux";
import { sendMessageThunk } from "../slices/conversationSlice";

const useSendMessage = () => {
  const dispatch = useDispatch();
  const sendMessage = async ({ message, receiverId }) => {
    dispatch(sendMessageThunk({ message, receiverId }));
  };
  return { sendMessage };
};

export default useSendMessage;
