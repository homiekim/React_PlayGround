import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const StyleInputContainer = styled.form`
  display: flex;
  width: 100%;
  padding: 0 80px;
  margin: 12px 0;
  align-items: flex-end;
`;

export const StyleTextField = styled(TextField)`
  width: 80%;
`;

export const StyleButton = styled.button`
    display : flex;
    align-items : flex-end;
    cursor: pointer;
    outline : none;
    border : 0;
    background : none;

`;