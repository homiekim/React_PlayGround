import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkAPI, logInAPI, refreshAPI } from "../api/user";
import style from "../style/loginForm.module.css";
import logo from "../asset/logo.png";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    []
  );
  const onChangePassowrd = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );
  const onLogIn = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const data = await logInAPI({ email, password });
      console.log(data);
    },
    [email, password]
  );

  const onAuthCheck = useCallback(async () => {
    const data = await checkAPI();
    console.log(data);
  }, []);
  const onAuthRefresh = useCallback(async () => {
    const data = await refreshAPI({ email });
    console.log(data);
  }, [email]);

  return (
    <div>
      <form>
        <div>
          <input
            className={style.input}
            placeholder="이메일 입력"
            type="text"
            value={email}
            onChange={onChangeEmail}
          />
        </div>
        <div>
          <input
            className={style.input}
            placeholder="비밀번호 입력"
            type="password"
            value={password}
            onChange={onChangePassowrd}
          />
        </div>
        <button className={style.button} type="submit" onClick={onLogIn}>
          로그인
        </button>
      </form>
      <div className={style.Oauth}>
        <div>SNS로 로그인 하기</div>
        <div className={style.logoContainer}>
          <img className={style.logo} src={logo} alt="logo" />
          <img className={style.logo} src={logo} alt="logo" />
          <img className={style.logo} src={logo} alt="logo" />
        </div>
      </div>
      <div className={style.signUpContainer}>
        <span>회원이 아니신가요? </span>
        <button className={style.signUp} onClick={() => navigate("/signup")}>
          회원가입
        </button>
      </div>
      <button onClick={onAuthCheck} hidden>
        check
      </button>
      <button onClick={onAuthRefresh} hidden>
        refresh
      </button>
    </div>
  );
};

export default LoginForm;
