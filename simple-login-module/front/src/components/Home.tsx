import React from "react";
import { useNavigate } from 'react-router-dom';
import style from '../style/Home.module.css';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <h1>Home 화면 입니다</h1>
      <button className={style.button} onClick={() => navigate('login')}>로그인 하러 가기</button>
    </div>
  );
};

export default Home;
