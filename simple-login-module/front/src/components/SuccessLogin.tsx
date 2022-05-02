import React, { useCallback } from 'react';
import { checkAPI, refreshAPI } from '../api/user';
import { User } from '../userType';
import style from '../style/Home.module.css';

interface Props{
  me : User
}
const SuccessLogin = ({me}: Props) => {
  console.log("me Props : ",me);

  const onAuthCheck = useCallback(async () => {
    const data = await checkAPI();
    console.log(data);
    if(data){
      alert('인증된 사용자 입니다.');
    }else{
      alert('토큰이 만료되었습니다.');
    }
  }, []);


  return (
    <div>
      <h1>{me.nickname}님 안녕하세요</h1>
      <div>
      <button className={style.button}  onClick={onAuthCheck} >
        check
      </button>
      </div>
    </div>
  )
}
export default SuccessLogin;