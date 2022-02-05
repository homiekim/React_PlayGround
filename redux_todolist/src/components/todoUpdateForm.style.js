import styled from "@emotion/styled";

export const StyleContainer = styled.div`
    border-top: 1px solid #dee2e6;
    border-bottom: 1px solid #dee2e6;
`;

export const StyleUpdateForm = styled.form`
  display: flex;
  padding: 10px 10px;
  align-items : center;
`;

export const StyleEditText = styled.span`
  display: inherit;
  margin: 0 1rem;
  font-weight : bold;
  font-size : 1.1rem;
`;

export const StyleUpdateinput = styled.input`
  flex: 1;
  font-size: 1.1rem;
  color: black;
  margin-right: 20px;
  padding: 7px 8px;
  border: 1.4px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
`;

export const StyleSaveButton = styled.button`
  background: white;
  border: 2px solid #a393eb;
  border-radius: 3px;
  margin-right: 20px;
  font-weight: bold;
  color: #a393eb;
  padding: 7px 15px;
  cursor:pointer;
  font-size : 1.1rem;
`;
