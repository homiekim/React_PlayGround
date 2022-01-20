import styled from '@emotion/styled';
import { ButtonBase } from '@mui/material';


export const StyleDeleteButton = styled(ButtonBase)`
    width : 120px;
    height : 40px;
    font-size : 20px;
    color: #fff;
    background-color: ${(props) => (props.disabled ? "#f007" : "#f00")};
  // Delete Button은 checked된 영화 목록이 없으면 비활성화 되는데, 시각적인 표시를 추가하기 위해서 사용
  // props로 넘기면 @emotion/styled에서 접근 가능함
  // disabled가 true이면 반투명한 빨간색, false이면 진한 빨간색을 띔
`;