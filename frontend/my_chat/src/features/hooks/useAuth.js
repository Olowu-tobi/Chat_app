/* eslint-disable no-useless-catch */
import { useDispatch, useSelector } from "react-redux";
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

export const useLogout = () => {
  const dispatch = useDispatch();
  const logout = async () => {
    try {
      await dispatch(logoutThunk());
    } catch (error) {
      throw error;
    }
  };
  return logout;
};

export const useRegister = () => {
  const dispatch = useDispatch();
  const register = async (credentials) => {
    try {
      await dispatch(registerThunk(credentials));
    } catch (error) {
      throw error;
    }
  };
  return register;
};

export const useAuthState = () => {
  return useSelector((state) => state.auth);
};
