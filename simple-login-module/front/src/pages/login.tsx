import React from "react";
import { useQuery } from 'react-query';
import { getUserInfoAPI } from '../api/user';
import LoginForm from "../components/LoginForm";
import SuccessLogin from '../components/SuccessLogin';
import style from "../style/login.module.css";
import { User } from '../userType';

const Login = () => {
  const {data : me} = useQuery<User>('user', getUserInfoAPI);
  console.log(me);
  return (
    <div className={style.container}>
      <div className={style.inner}>
        {me ? <SuccessLogin /> :<LoginForm />}
      </div>
    </div>
  );
};

export default Login;
