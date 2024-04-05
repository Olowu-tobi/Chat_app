import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiService from "../../service/ApiService";
import { toast } from "react-toastify";

const api = new ApiService();
export const conversationThunk = createAsyncThunk(
  "messages/conversation",
  async (receiverId) => {
    try {
      const conversation = await api.getWithToken(`/message/${receiverId}`);
      return conversation;
    } catch (error) {
      toast.error(error.message);
      throw error;
    }
  }
);

export const sendMessageThunk = createAsyncThunk(
  "sendMessage",
  async ({ message, receiverId }) => {
    try {
      const resp = await api.postWithToken(`/message/send/${receiverId}`, {
        message,
      });
      return resp;
    } catch (error) {
      toast.error(error.message);
      throw error;
    }
  }
);

const conversationSlice = createSlice({
  name: "messages",
  initialState: {
    conversation: [],
    error: null,
  },
  reducers: {
    setConversation: (state, action) => {
      state.conversation = [...state.conversation, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(conversationThunk.pending, (state) => {
        state.conversation = null;
        state.error = null;
      })
      .addCase(conversationThunk.fulfilled, (state, action) => {
        state.conversation = action.payload;
        state.error = null;
      })
      .addCase(conversationThunk.rejected, (state, action) => {
        state.conversation = null;
        state.error = action.payload.error;
      })
      .addCase(sendMessageThunk.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(sendMessageThunk.fulfilled, (state, action) => {
        state.error = null;
        state.conversation = [...state.conversation, action.payload];
      });
  },
});

export const { setConversation } = conversationSlice.actions;
export default conversationSlice.reducer;
