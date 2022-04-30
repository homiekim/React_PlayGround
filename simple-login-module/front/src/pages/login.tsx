import React from "react";
import LoginForm from "../components/LoginForm";
import style from "../style/login.module.css";

const Login = () => {
  return (
    <div className={style.container}>
      <div className={style.inner}>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
