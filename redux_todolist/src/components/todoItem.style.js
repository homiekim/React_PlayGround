import styled from "@emotion/styled";


export const StyleItemBox = styled.div`
  display: flex;
  padding : 15px 10px;
  & + &{
    border-top: 1px solid #dee2e6;
  }
  &:nth-of-type(even){
    background: #f8f9fa;
  }
  align-items : center;
`;

export const StyleCheckBox = styled.div`

  display : inherit;
  margin : 0 1rem;
  cursor: pointer;
  color: ${(props) => (props.checked ? "#c3bef0" : "#999")};

`;

export const StyleTextBox = styled.div`
  flex : 1;
  display : inherit;
  font-size : 1.1rem;
  color : #616161;
  font-weight : ${(props) => (props.checked ? "lighter" : "bold")};
  text-decoration : ${(props) => (props.checked ? "line-through" : "none")};

`;

export const StyleUpdateButton = styled.div`
  background-color : none;
  width : 30px;
  font-size : 1.4rem;
  margin-right : 20px;
  font-weight : bold;
  color : #c3bef0;
  cursor: pointer;
  transition : all 200ms ease-in;
  :hover{
    transform : scale(1.1);
  }
`;

export const StyleRemoveButton = styled.div`
  background-color : none;
  width : 30px;
  font-size : 1.4rem;
  margin-right : 20px;
  color : #f83e4b;;
  cursor: pointer;
  transition : all 200ms ease-in;
  :hover{
    transform : scale(1.1);
  }
`;