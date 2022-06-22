import React, { useCallback, useEffect, useState } from "react";
import { signUpAPI } from "../api/user";
import style from "../style/signup.module.css";
import CustomInput from "./CustomInput";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [passwordChk, setPasswordChk] = useState("");
  const [passwordError,setPasswordError] = useState(false);
  const [passwordSuccess, setPasswrodSuccess] = useState(false);

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
  const onChangePassowrdChk = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPasswordChk(e.target.value);
      setPasswordError(e.target.value !== password);
      setPasswrodSuccess(e.target.value === password);
    },
    []
  );
  const onChangeNickname = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setNickname(e.target.value);
    },
    []
  );

  const onSubmit = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      signUpAPI({ email, password, nickname });
    },
    [email, password, nickname]
  );

  useEffect(() => {
    if (passwordChk !== '' && password === passwordChk) {
      setPasswordError(false);
      setPasswrodSuccess(true);
    } else if(passwordChk === ''){
      setPasswordError(false);
      setPasswrodSuccess(false);
    }
  }, [password,passwordChk]);

  return (
    <div>
      <form>
        <div>
          <CustomInput
            width={280}
            height={52}
            inputType="email"
            value={email}
            onChange={onChangeEmail}
          />
        </div>
        <div>
          <CustomInput
            width={280}
            height={52}
            inputType="password"
            value={password}
            onChange={onChangePassowrd}
          />
        </div>
        <div>
          <CustomInput
            width={280}
            height={52}
            inputType="passwordChk"
            value={passwordChk}
            onChange={onChangePassowrdChk}
            isError={passwordError}
            isSuccess={passwordSuccess}
          />
        </div>
        <div>
          <CustomInput
            width={280}
            height={52}
            inputType="nickname"
            value={nickname}
            onChange={onChangeNickname}
          />
        </div>
        <button className={style.button} type="submit" onClick={onSubmit}>
          회원가입 하기
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
