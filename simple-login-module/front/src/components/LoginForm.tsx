import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onChangeId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  }, []);
  const onChangePassowrd = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );

  return (
    <div>
      <form>
        <div>
          아이디: 
          <input type="text" value={id} onChange={onChangeId} />
        </div>
        <div>
          비밀번호 :
          <input type="password" value={password} onChange={onChangePassowrd} />
        </div>
        <button>로그인</button>
        <button onClick={() => navigate("/signup")}>회원가입</button>
      </form>
    </div>
  );
};

export default LoginForm;
