import { useEffect } from "react";
import { getUser, getUsers } from "../apis/user";
import { User } from "../typings/user";
import { useUserDispatch, useUsersState } from "../utils/custom-context";

type ReturnType = {
  isLoading: boolean;
  data: Array<User> | null;
  error: Error | null;
  selectHandler : (id:number) => void;
};
const useUsers = (): ReturnType => {
  const { users, user } = useUsersState();
  const dispatch = useUserDispatch();

  useEffect(() => {
    const fetchUsers = async () => {
      dispatch({ type: "GET_USERS" });
      try {
        const response = await getUsers();
        dispatch({ type: "GET_USERS_SUCCESS", data: response });
      } catch (e) {
        dispatch({ type: "GET_USERS_FAILURE", error: e as unknown as Error });
      }
    };
    if (users.data === null) fetchUsers();
  }, [dispatch, users.data]);

  const selectHandler = async (id: number) => {
    if (user.data !== null && user.data.id === id) return;
    dispatch({ type: "GET_USER" });
    try {
      const response = await getUser(id);
      dispatch({ type: "GET_USER_SUCCESS", data: response });
    } catch (e) {
      dispatch({ type: "GET_USER_FAILURE", error: e as unknown as Error });
    }
  };

  return {
    isLoading: false,
    data: users.data,
    error: users.error,
    selectHandler: selectHandler,
  };
};

export default useUsers;
