import { useDispatch, useSelector } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, registerThunk } from "../slices/authSlice";

export const useLogin = () => {
  const dispatch = useDispatch();
  const login = async (credentials) => {
    // eslint-disable-next-line no-useless-catch
    try {
      await dispatch(loginThunk(credentials));
    } catch (error) {
      throw error;
    }
  };
  return login;
};
