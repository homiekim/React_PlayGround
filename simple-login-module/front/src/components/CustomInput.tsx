import React, { useMemo } from "react";
import style from "../style/input.module.css";
import { ReactComponent as Caution } from "../asset/caution.svg";
import { ReactComponent as Success } from "../asset/success.svg";
interface Props {
  inputType: string;
  isError?: boolean;
  isSuccess?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  width: number;
  height: number;
}
/*타입 구분해야하는거
email
password
passwordChk
url
nickname
그냥 text
*/
function getInputData(inputType: string) {
  let errorMessage!: string;
  let placeHolderMessage!: string;
  let customType!: string;
  if (inputType === "email") {
    errorMessage = "중복된 이메일 입니다.";
    placeHolderMessage = "이메일 입력";
    customType = "text";
  } else if (inputType === "password") {
    errorMessage = "";
    placeHolderMessage = "비밀 번호 입력";
    customType = "password";
  } else if (inputType === "passwordChk") {
    errorMessage = "비밀번호가 일치하지 않습니다.";
    placeHolderMessage = "비밀 번호 확인";
    customType = "password";
  } else if (inputType === "url") {
    errorMessage = "올바르지 않은 링크 입니다.";
    placeHolderMessage = "링크 주소를 입력해 주세요.";
    customType = "text";
  } else if (inputType === "nickname") {
    errorMessage = "중복된 닉네임 입니다.";
    placeHolderMessage = "닉네임 입력";
    customType = "text";
  } else {
    errorMessage = "";
    placeHolderMessage = "";
    customType = "text";
  }
  return { errorMessage, placeHolderMessage, customType };
}
const CustomInput = ({
  inputType,
  isError,
  isSuccess,
  onChange,
  value,
  width,
  height,
}: Props) => {
  const { errorMessage, placeHolderMessage, customType } =
    getInputData(inputType);

  const iconPosition = useMemo(
    () => ({
      transform: `translate(${width - 40}px,-${20 + (height - 20) / 2}px)`,
    }),
    []
  );

  return (
    <div className={style.container}>
      {isError && <label>{errorMessage}</label>}
      <input
        style={{ width: width, height: height }}
        placeholder={placeHolderMessage}
        className={`${style.input} ${isError ? style.err : ""}`}
        type={customType}
        value={value}
        onChange={onChange}
      />
      {isError && (
        <div style={iconPosition} className={style.icon}>
          <Caution fill="#F17971" />
        </div>
      )}
      {isSuccess && (
        <div style={iconPosition} className={style.icon}>
          <Success fill="#4DED30" />
        </div>
      )}
    </div>
  );
};

export default CustomInput;

