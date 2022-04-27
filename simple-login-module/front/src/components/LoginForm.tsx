import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logInAPI } from '../api/user';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);
  const onChangePassowrd = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );
  const onLogIn = useCallback(async (e : React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    const data = await logInAPI({email, password});
    console.log(data);
  },[email, password]);

  return (
    <div>
      <form>
        <div>
          아이디: 
          <input type="text" value={email} onChange={onChangeEmail} />
        </div>
        <div>
          비밀번호 :
          <input type="password" value={password} onChange={onChangePassowrd} />
        </div>
        <button type='submit' onClick={onLogIn}>로그인</button>
        <button onClick={() => navigate("/signup")}>회원가입</button>
      </form>
    </div>
  );
};

export default LoginForm;
