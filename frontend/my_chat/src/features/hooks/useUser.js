/* eslint-disable no-useless-catch */
import { fetchUserData, getUsers, setUser } from "../slices/userSlice";
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
export const useSetUser = () => {
  const dispatch = useDispatch();
  const selectedUser = useSelector((state) => state.user.selectedUser);
  const setUsers = (user) => {
    dispatch(setUser(user));
  };
  return { selectedUser, setUsers };
};

export const useUserState = () => {
  return useSelector((state) => state.user);
};
