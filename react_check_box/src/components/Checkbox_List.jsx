import { Checkbox } from '@mui/material';
import React from "react";
import Checkbox_Item from "./Checkbox_Item";
import { StyledCheckboxContent } from "./Checkbox_Item";

const Checkbox_List = ({
  checkboxList,
  onChangeCheckbox,
  onClickChangeView,
  AllCheck,
  onChangeAllCheckbox,
}) => {
  return (
    <>
      {checkboxList.map((checkboxItem) => (
        <Checkbox_Item
          key={checkboxItem.id}
          isHide={checkboxItem.isHide}
          label="동의함"
          checked={checkboxItem.checked}
          onChangeCheckbox={() => onChangeCheckbox(checkboxItem.id)}
          onClickChangeView={() => onClickChangeView(checkboxItem.id)}
        />
      ))}
      <br/>
      <StyledCheckboxContent>
        <p>전체 동의</p>
        <Checkbox onChange={onChangeAllCheckbox} checked={AllCheck} />
      </StyledCheckboxContent>
    </>
  );
};

export default Checkbox_List;
