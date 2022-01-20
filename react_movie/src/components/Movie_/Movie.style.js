import styled from '@emotion/styled';



export const StyleMovieList = styled.div`
    padding : 0 80px;
`;

export const StyleMovieItem = styled.div`
    position : relative;
    display : flex;
    align-items : center;
    width : 100%;
    border : solid 1px #777;
    border-radius : 20px;
    overflow : hidden;
    box-shadow : 0px 3px 15px #0003;

    & + &{
        margin-top : 20px;
    }
`;
export const StyleMovieImageBox = styled.div`
  width: 40%;
  height: 100%;
`; // Movie의 Image 영역을 감싸는 스타일 컴포넌트

export const StyleMovieImage = styled.img`
    display : block;
    width : 100%;
`;

export const StyleMovieContentBox = styled.div`
  width: 60%;
  padding: 12px;
`;

export const StyleMovieAnchor = styled.a`
    color : #222;
    font-size : 12px;
    text-align : center;
    word-break: keep-all; // 글자가 범위 초과했을 경우 한 글자씩 잘리지 않고 한 단어 묶음으로 자름
    text-decoration : none;
    &:hover {
        text-decoration : underline;
    }

`;

export const StyleMovieTitle = styled.h3`
    color : #000;
`;

export const StyleMovieSubtitle = styled.h4`
  color: #555;
  margin-top: 8px;
`; 

export const StyleMovieDirector = styled.p`
  color: #999;
  margin-top: 40px;
`; 

export const StyleMovieCheckboxArea = styled.div`
    position : absolute;
    top : 6px;
    right : 6px;
`;




