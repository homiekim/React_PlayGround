import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../style/Home.module.css";
import CustomInput from "./CustomInput";

const Home = () => {
  const navigate = useNavigate();
  const [test, setTest] = useState("");
  const onChangeTest = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTest(e.target.value);
  }, []);
  return (
    <div className={style.container}>
      <h1>Home 화면 입니다</h1>
      <button className={style.button} onClick={() => navigate("login")}>
        로그인 하러 가기
      </button>
      <CustomInput
        inputType="email"
        isError={false}
        value={test}
        onChange={onChangeTest}
      />
      <CustomInput
        inputType="password"
        value={test}
        onChange={onChangeTest}
      />
      <CustomInput
        inputType="passwordChk"
        isError={false}
        value={test}
        onChange={onChangeTest}
      />
    </div>
  );
};

export default Home;
