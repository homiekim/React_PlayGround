import React from 'react';
import { useUsersState } from '../utils/custom-context';

const User = () => {
  const {user} = useUsersState();
  if (user.isLoading) return <div>loading ... </div>;
  if (user.error) return <div>error!!</div>;
  return (
    user.data ? <div>{user.data.name}</div> : <div>선택된 유저 없음</div>
  )
}

export default User;