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
        width={343}
        height={52}
        inputType="url"
        value={test}
        onChange={onChangeTest}
        isError={true}
      />
    </div>
  );
};

export default Home;
