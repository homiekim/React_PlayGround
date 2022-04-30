import React from "react";
import SignUpForm from "../components/SignUpForm";
import style from "../style/login.module.css";

const Signup = () => {
  return (
    <div className={style.container}>
      <div className={style.inner}>
        <SignUpForm />
      </div>
    </div>
  );
};

export default Signup;
