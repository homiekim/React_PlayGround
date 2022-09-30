import React from "react";
import useUsers from "../hooks/use-users";

const UserList = () => {
  const { isLoading, data, error, selectHandler } = useUsers();
 
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
