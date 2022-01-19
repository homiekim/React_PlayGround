import React from "react";
import styled from "@emotion/styled/macro";
import { Checkbox } from "@mui/material";
import { dummyLong, dummyShort } from '../dummy';

const StyledCheckboxWrapper = styled.div`
  padding: 0 12px;
  box-shadow: 0px 3px 15px #0001;
  border: solid 1px rgba(0, 0, 0, 0.1);
  margin: 0 20px;
  border-radius: 4px;
  & + & {
    margin-top: 20px;
  }

  span {
      text-decoration : underline;
      text-underline-position : under;
      color : #777;
      cursor: pointer;
  }
`;

export const StyledCheckboxContent = styled.div`
  display: flex;
  align-self: center;
  justify-content: right;
  height: 40px;
  p {
    align-self: center;
  }
`;

const StyledContentSmall = styled.div`
  
  width: 100%;
  color: rgba(0, 0, 0, 0.8);
  font-size: 15px;
  padding: 24px 0;
`;

const StyledContentDetail = styled.div`
  width: 100%;
  color: rgba(0, 0, 0, 0.8);
  font-size: 15px;
  padding: 24px 0;
`;

const Checkbox_Item = ({
  isHide,
  checked,
  label,
  onChangeCheckbox,
  onClickChangeView,
}) => {
  return (
    <>
      <StyledCheckboxWrapper>
        {isHide ? (
          <StyledContentSmall>
            {dummyShort} ... <span onClick={onClickChangeView}>더보기</span>
          </StyledContentSmall>
        ) : (
          <StyledContentDetail>{dummyLong} ... <span onClick={onClickChangeView}>접기</span></StyledContentDetail>
        )}
      </StyledCheckboxWrapper>
      <StyledCheckboxContent>
        <p>{label}</p>
        <Checkbox onChange={onChangeCheckbox} checked={checked} />
      </StyledCheckboxContent>
    </>
  );
};

export default Checkbox_Item;
