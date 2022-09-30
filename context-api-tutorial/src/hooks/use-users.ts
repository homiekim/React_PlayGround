import { useEffect } from "react";
import { getUsers } from "../apis/user";
import { User } from "../typings/user";
import { useUserDispatch, useUsersState } from "../utils/custom-context";

type ReturnType = {
  isLoading: boolean;
  data: Array<User> | null;
  error: Error | null;
};
const useUsers = (): ReturnType => {
  const { users } = useUsersState();
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

  return {
    isLoading: false,
    data: users.data,
    error: users.error,
  };
};

export default useUsers;
