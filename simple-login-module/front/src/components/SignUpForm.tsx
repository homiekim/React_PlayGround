import React, { useCallback, useState } from 'react';
import { signUpAPI } from '../api/user';
import style from '../style/signup.module.css';

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const onChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);
  const onChangePassowrd = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );
  const onChangeNickname = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  }, []);

  const onSubmit = useCallback((e : React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault();
    signUpAPI({email, password, nickname})
  },[email, password, nickname]);

  return (
    <div>
      <form>
      <div>
          <input className={style.input} placeholder='닉네임 입력' type="text" value={nickname} onChange={onChangeNickname} />
        </div>
        <div>
          <input className={style.input} placeholder='이메일 입력' type="text" value={email} onChange={onChangeEmail} />
        </div>
        <div>
          <input className={style.input} placeholder='비밀번호 입력' type="password" value={password} onChange={onChangePassowrd} />
        </div>
        <button className={style.button} type='submit' onClick={onSubmit}>회원가입 하기</button>
      </form>
    </div>
  );
}

export default SignUpForm;