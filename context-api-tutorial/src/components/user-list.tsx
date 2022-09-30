import React from "react";
import { getUser } from "../apis/user";
import useUsers from "../hooks/use-users";
import { useUserDispatch, useUsersState } from "../utils/custom-context";

const UserList = () => {
  const { isLoading, data, error } = useUsers();
  const { user } = useUsersState();
  const dispatch = useUserDispatch();
  console.log(data);

  const selectHandler = async (id: number) => {
    if(user.data !== null && user.data.id === id) return;
    dispatch({ type: "GET_USER" });
    try {
      const response = await getUser(id);
      dispatch({ type: "GET_USER_SUCCESS", data: response });
    } catch (e) {
      dispatch({ type: "GET_USER_FAILURE", error: e as unknown as Error });
    }
  };
  if (isLoading) return <div>loading ... </div>;
  if (error) return <div>error!!</div>;
  return (
    <ul>
      {data?.map((v, i) => (
        <li key={v.id} onClick={() => selectHandler(v.id)}>
          {v.name}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
