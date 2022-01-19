import styled from "@emotion/styled/macro";
import { useCallback, useMemo, useState } from "react";
import Checkbox_List from "./components/Checkbox_List";
import { Button } from "@mui/material";
const StyleApp = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #ebebeb;
`;

const StyleAppContent = styled.article`
  width: 800px;
  height: 100%;
  margin: 0 auto;
  background-color: #fff;
`;

const StyledButtonSection = styled.div`
  margin : 20px auto;
  width : 200px;
  
  button {
    margin : 10px;
  }
`;

const App = () => {
  const [checkboxList, setCheckboxList] = useState([
    {
      id: 1,
      isHide: true,
      checked: false,
    },
    {
      id: 2,
      isHide: true,
      checked: false,
    },
  ]);

  const onChangeCheckbox = useCallback(
    (id) => {
      const newCheckboxList = checkboxList.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      );
      setCheckboxList(newCheckboxList);
    },
    [checkboxList]
  );

  const onClickChangeView = useCallback(
    (id) => {
      const newCheckboxList = checkboxList.map((item) =>
        item.id === id ? { ...item, isHide: !item.isHide } : item
      );
      setCheckboxList(newCheckboxList);
    },
    [checkboxList]
  );

  const AllCheck = useMemo(
    () => checkboxList.every((checkboxItem) => checkboxItem.checked),
    [checkboxList]
  );

  const onChangeAllCheckbox = useCallback(() => {
    const newCheckboxList = checkboxList.map((checkboxItem) => ({
      ...checkboxItem,
      checked: !AllCheck,
    }));
    setCheckboxList(newCheckboxList);
  }, [AllCheck, checkboxList]);

  return (
    <StyleApp>
      <StyleAppContent>
        <Checkbox_List
          checkboxList={checkboxList}
          onChangeCheckbox={onChangeCheckbox}
          onClickChangeView={onClickChangeView}
          AllCheck={AllCheck}
          onChangeAllCheckbox={onChangeAllCheckbox}
        />
        <StyledButtonSection>
          <Button variant="contained">회원가입</Button>
          <Button variant="contained" color="error">
            취소
          </Button>
        </StyledButtonSection>
      </StyleAppContent>
    </StyleApp>
  );
};
export default App;
