### 01.12
* 구구단게임, 끝말잇기 게임 (CRA없이 웹팩, 바벨로 리액트 프로젝트 구성)

### 01.13
* 숫자야구게임 구현 
* import, require차이(require은 node 모듈에서 사용하는 명령어, 리액트도 내부에서 babel로 import가 exports- require 구조로 변환 되는 것)
* 컴포넌트 최적화(PureComponent, React.memo)
* 에러 핸들링(배열.map(()=>{} 써서 에러남 바로 리턴해주려면 () 하고 내부에 return 쓰면 안됨)


### 01.18
* setTimout 사용해서 반응 속도체크하는 게임 구현
* 에러 핸들링
  - result state에 new Date() 통해 시간을 저장했는데 result.reduce((a,c) => a+c)할 때 NaN이 나옴
  - 저장 할때 이전 시간에 start와 end를 붙여서 저장했는데([...prevState, start, end] 이런식으로) date 객체를 더하면 문자열 더해짐 그래서 reduce할때 NaN이 나오는 거였음
  - result저장할 때 end- start 값을 저장해서 해결
  - date객체를 더하면 문자열 더해지고 빼면 밀리초로 빼짐 왜그런진 모르겠음 테스트해봄
  ```javascript
  
    const date1 = new Date();

    setTimeout(()=> {
        console.log('settimeout실행');
        const date2 = new Date();
        console.log(date2);
        console.log(date2 + date1); // 이거 결과 : Tue Jan 18 2022 16:48:03 GMT+0900 (한국 표준시)Tue Jan 18 2022 16:48:02 GMT+0900 (한국 표준시)
        console.log(date2 - date1); // 이거 결과 : 1002
    },1000);

    console.log(date1);

  ```
  
### 01.19
* emotion, material ui 라이브러리 사용해서 간단한 체크박스 기능 구현, CRA로 초기세팅함
* 회원가입시 약관동의하는 페이지 처럼 만듬
* 전체 동의 선택시 전체 체크박스 체크됨, 체크박스 전부 동의함 체크하면 전체 전체동의 체크박스 체크되게 구현함 -> every함수 사용
```javascript
  const AllCheck = useMemo(
     () => checkboxList.every((checkboxItem) => checkboxItem.checked)
  ,[checkboxList]);
```
* useMemo, useCallback이용해서 chekboxList상태가 변할때면 렌더링되게 최적화
