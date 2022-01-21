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


### 01.20
* 영화 리스트 검색 프로그램 구현
* emotion, material ui, naver 검색 api 사용
* 외부api 받아올 때 fetAPI사용
* 영화 제목 인풋으로 받아서 props로 넘겨줄 때 함수에 파라미터가 필요해서 콜백으로 한번 감싸서 넘김
```js
  const handleSearch = ()=>{
        console.log('test');
        callApiGetMovieList(inputValue);
    };
```
* 파라미터 넘길 때 .bind()하는 방법도 있음 콜백넘기는게 더 가독성이 좋은 듯하다
* 검색하는 부분 useCallback으로 감싸니까 에러남 내일 해결예정
* 인풋 상태관리할 때 onChange할 때마다 리렌더링 됨 이것도 내일 최적화 할 예정
```js
// 현재 방법
const [inputValue, setInputValue] = useState('');
const onChangeInputValue = (e) => {
        setInputValue(e.target.value);
}
return (
<SearchBox handleSearch={handleSearch} onChangeInputValue={onChangeInputValue} />
 )
```

### 01.21
* 어제 하던거 영화 검색기능 최적화
* onChange로 setValue해주니까 한글자 칠때마다 상태값이 바껴서 리렌더링됨 form-submit방식으로 수정함
```js
  // 개선된 방식
  const SearchBox = memo(({getAPI, setValue }) => {
    const inputRef = useRef();
    

    const onSubmit = (e) => {
        e.preventDefault();
        const name = inputRef.current.value;
        name && setValue(name);
        getAPI(name);
        inputRef.current.value = '';
    }

  return (
    <StyleInputContainer onSubmit={onSubmit}>
      <StyleTextField
        inputRef={inputRef}
        id="standard-basic"
        label="search movie..."
        variant="standard"
      />
      <StyleButton  type='submit'>
        <SearchIcon fontSize="large" color="primary"/>
      </StyleButton>
    </StyleInputContainer>
  );
});

export default SearchBox;
```
* 에러 핸들링
  - input태그 대신 material ui에서 TextField 가져왔는데 이건 React.createRef 동작안함 콘솔 찍어 보니까 undefined뜸
  - https://stackoverflow.com/questions/59647940/how-can-i-use-ref-in-textfield 이거 글보고 해결함 useRef 하고 inputRef={} 이런식으로 하니까 동작함
  - material ui icon 처음 써봤는데 디자인 하는데 안익숙했음 개발자도구 보니까 <svg> 태그 안에 <path>태그가 있는 방식이였음 추후에 jpg,svg,png 차이점 공부해야 겠음
  - 검색하는 fetch함수에서 파라미터로 name값 받는데 콜백함수에 넣어서 파라미터 넘겨 주는 방식으로 코딩했는데 이게 submit할때 에러남
  ```js
    const onSubmit = (e) => {
        e.preventDefault();
        const name = inputRef.current.value;
        name && setValue(name);
        handleSearch(name);
        inputRef.current.value = '';
    }
  ```
  - submit할 때 input값을 setValue해주는데 이게 [value, setValue]=useState();를 props로 넘겨받은건데 이 set함수가 비동기 방식으로 동작함 그래서 처음에 handleSearch하면 query에 아무값이 안들어있어서 에러났었음
  - 한참 고민하다가 submit에는 핸들러 함수대신 fetch.js에서 작성한 fetch함수를 직접 넘겨줬음 둘다 비동기 방식으로 동작해서 그런지 name값 들어오고 검색까지 정상적으로 
