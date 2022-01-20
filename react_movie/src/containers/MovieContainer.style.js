import styled from '@emotion/styled/macro';

export const StyleMovieAllCheckArea = styled.div`
    display : flex;
    align-items : center;
    justify-content : flex-end;
`;

export const StyleMovieAllCheckText = styled.p`
  font-size: 14px;
  color: ${(props) => (props.checked ? "#222" : "#999")};
  // 텍스트의 props인 checked가 true이면 진한 검정, flase이면 연한 회색을 띔
`; 