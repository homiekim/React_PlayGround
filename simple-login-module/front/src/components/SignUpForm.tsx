import React, { useCallback, useState } from 'react';
import { signUpAPI } from '../api/user';

const SignUpForm = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const onChangeId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
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
    signUpAPI({id, password, nickname})
    
  },[id, password, nickname]);

  return (
    <div>
      <form>
      <div>
          닉네임 :
          <input type="text" value={nickname} onChange={onChangeNickname} />
        </div>
        <div>
          아이디: 
          <input type="text" value={id} onChange={onChangeId} />
        </div>
        <div>
          비밀번호 :
          <input type="password" value={password} onChange={onChangePassowrd} />
        </div>
        <button type='submit' onClick={onSubmit}>회원가입 하기</button>
      </form>
    </div>
  );
}

export default SignUpForm;