/* eslint-disable no-useless-catch */
import { fetchUserData, getUsers } from "../slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

export const useUser = () => {
  const dispatch = useDispatch();
  const user = async () => {
    try {
      await dispatch(fetchUserData());
    } catch (error) {
      throw error;
    }
  };
  return user;
};

export const useUsers = () => {
  const dispatch = useDispatch();
  const users = async () => {
    try {
      await dispatch(getUsers());
    } catch (error) {
      throw error;
    }
  };
  return users;
};

export const useUserState = () => {
  return useSelector((state) => state.user);
};
