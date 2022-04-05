### 01.12

- 구구단게임, 끝말잇기 게임 (CRA없이 웹팩, 바벨로 리액트 프로젝트 구성)

### 01.13

- 숫자야구게임 구현
- import, require차이(require은 node 모듈에서 사용하는 명령어, 리액트도 내부에서 babel로 import가 exports- require 구조로 변환 되는 것)
- 컴포넌트 최적화(PureComponent, React.memo)
- 에러 핸들링(배열.map(()=>{} 써서 에러남 바로 리턴해주려면 () 하고 내부에 return 쓰면 안됨)

### 01.18

- setTimout 사용해서 반응 속도체크하는 게임 구현
- 에러 핸들링

  - result state에 new Date() 통해 시간을 저장했는데 result.reduce((a,c) => a+c)할 때 NaN이 나옴
  - 저장 할때 이전 시간에 start와 end를 붙여서 저장했는데([...prevState, start, end] 이런식으로) date 객체를 더하면 문자열 더해짐 그래서 reduce할때 NaN이 나오는 거였음
  - result저장할 때 end- start 값을 저장해서 해결
  - ~~date객체를 더하면 문자열 더해지고 빼면 밀리초로 빼짐 왜그런진 모르겠음 테스트해봄~~
  > js에서 `+` 단항 연산자는 문자열에 사용경우 문자열 연결 연산자로 동작합니다. 두 객체를 더하면 문자열이 합쳐진 결과가 나옵니다. Date객체는 함수로 호출 시 문자열로 변환되서 반환됩니다.(https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date) `-` 연산자 경우는 피연산자의 부호를 반전시키는 부수효과를 가지며 숫자가 아닌 타입의 피연산자를 숫자타입으로 변환하여 반환합니다. 그래서 date객체를 빼면 시간 차이를 구할 수 있습니다.
  ```javascript
  const date1 = new Date();

  setTimeout(() => {
    console.log("settimeout실행");
    const date2 = new Date();
    console.log(date2);
    console.log(date2 + date1); // 이거 결과 : Tue Jan 18 2022 16:48:03 GMT+0900 (한국 표준시)Tue Jan 18 2022 16:48:02 GMT+0900 (한국 표준시)
    console.log(date2 - date1); // 이거 결과 : 1002
  }, 1000);

  console.log(date1);
  ```

### 01.19

- emotion, material ui 라이브러리 사용해서 간단한 체크박스 기능 구현, CRA로 초기세팅함
- 회원가입시 약관동의하는 페이지 처럼 만듬
- 전체 동의 선택시 전체 체크박스 체크됨, 체크박스 전부 동의함 체크하면 전체 전체동의 체크박스 체크되게 구현함 -> every함수 사용

```javascript
const AllCheck = useMemo(
  () => checkboxList.every((checkboxItem) => checkboxItem.checked),
  [checkboxList]
);
```

- useMemo, useCallback이용해서 chekboxList상태가 변할때면 렌더링되게 최적화

### 01.20

- 영화 리스트 검색 프로그램 구현
- emotion, material ui, naver 검색 api 사용
- 외부api 받아올 때 fetAPI사용
- 영화 제목 인풋으로 받아서 props로 넘겨줄 때 함수에 파라미터가 필요해서 콜백으로 한번 감싸서 넘김

```js
const handleSearch = () => {
  console.log("test");
  callApiGetMovieList(inputValue);
};
```

- 파라미터 넘길 때 .bind()하는 방법도 있음 콜백넘기는게 더 가독성이 좋은 듯하다
- 검색하는 부분 useCallback으로 감싸니까 에러남 내일 해결예정
- 인풋 상태관리할 때 onChange할 때마다 리렌더링 됨 이것도 내일 최적화 할 예정

```js
// 현재 방법
const [inputValue, setInputValue] = useState("");
const onChangeInputValue = (e) => {
  setInputValue(e.target.value);
};
return (
  <SearchBox
    handleSearch={handleSearch}
    onChangeInputValue={onChangeInputValue}
  />
);
```

### 01.21

- 어제 하던거 영화 검색기능 최적화
- onChange로 setValue해주니까 한글자 칠때마다 상태값이 바껴서 리렌더링됨 form-submit방식으로 수정함

```js
// 개선된 방식
const SearchBox = memo(({ getAPI, setValue }) => {
  const inputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const name = inputRef.current.value;
    name && setValue(name);
    getAPI(name);
    inputRef.current.value = "";
  };

  return (
    <StyleInputContainer onSubmit={onSubmit}>
      <StyleTextField
        inputRef={inputRef}
        id="standard-basic"
        label="search movie..."
        variant="standard"
      />
      <StyleButton type="submit">
        <SearchIcon fontSize="large" color="primary" />
      </StyleButton>
    </StyleInputContainer>
  );
});

export default SearchBox;
```

- 에러 핸들링
  - input태그 대신 material ui에서 TextField 가져왔는데 이건 React.createRef 동작안함 콘솔 찍어 보니까 undefined뜸
  - https://stackoverflow.com/questions/59647940/how-can-i-use-ref-in-textfield 이거 글보고 해결함 useRef 하고 inputRef={} 이런식으로 하니까 동작함
  - material ui icon 처음 써봤는데 디자인 하는데 안익숙했음 개발자도구 보니까 svg 태그 안에 path태그가 있는 방식이였음 추후에 jpg,svg,png 차이점 공부해야 겠음
  - 검색하는 fetch함수에서 파라미터로 name값 받는데 콜백함수에 넣어서 파라미터 넘겨 주는 방식으로 코딩했는데 이게 submit할때 에러남
  ```js
  const onSubmit = (e) => {
    e.preventDefault();
    const name = inputRef.current.value;
    name && setValue(name);
    handleSearch(name);
    inputRef.current.value = "";
  };
  ```
  - submit할 때 input값을 setValue해주는데 이게 [value, setValue]=useState();를 props로 넘겨받은건데 이 set함수가 비동기 방식으로 동작함 그래서 처음에 handleSearch하면 query에 아무값이 안들어있어서 에러났었음
  - 한참 고민하다가 submit에는 핸들러 함수대신 fetch.js에서 작성한 fetch함수를 직접 넘겨줬음 둘다 비동기 방식으로 동작해서 그런지 name값 들어오고 검색까지 정상적으로 동작함

### 01.24

- png, jpg, svg 차이점 관해 글 포스팅 https://hoime.tistory.com/35
- 리액트에서 svg이미지 파일 사용하기

1. svg 파일을 직접 html안에 넣는 것

```js
import logo from "./logo.svg";
import "./App.css";
import cookie from "./cookie_icon.svg";
​
function App() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
        <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
        <line x1="12" y1="20" x2="12.01" y2="20"></line>
      </svg>
      <div>Simple Wife svg Icon</div>
    </>
  );
}
​
export default App;
```

svg 태그의 속성을 통해 커스텀 가능하지만 이 태그를 컴포넌트화 해서 사용가능하다

WifiIcon.jsx
​

```js
import React from 'react';
​
const WifiIcon = () => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    viewBox="0 0 20 20"
    fill="none"
    stroke="#000000"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
    <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
    <line x1="12" y1="20" x2="12.01" y2="20"></line>
  </svg>
);
​
export default WifiIcon;
```

​
app.js
​

```js
import logo from "./logo.svg";
import "./App.css";
import cookie from "./cookie_icon.svg";
import WifiIcon from './WifiIcon';
​
function App() {
  return (
    <>
      <WifiIcon/>
      <div>Simple Wife svg Icon</div>
    </>
  );
}
​
export default App;
```

​
이런 방법 보다는 파일을 직접 다운 받아서 쓰는 방법이 더 간편한듯 하다

2. img 처럼 사용하는 방법

```js
import logo from "./logo.svg";
import "./App.css";
import cookie from "./cookie_icon.svg";
import WifiIcon from './WifiIcon';
​
function App() {
  return (
    <>
      <img src={cookie} />
      <div>Simple cookie svg Icon</div>
    </>
  );
}
​
export default App;
```

​
인터넷에서 .svg 아이콘을 다운받아서 이미지형식으로 불러옴
​
태그에 className 지정해서 css 스타일링도 가능하다

3. 리액트 컴포넌트로 사용하는 방법

```js
import logo from "./logo.svg";
import "./App.css";
import { ReactComponent as Cookie } from "./cookie_icon.svg";
import WifiIcon from './WifiIcon';
​
function App() {
  return (
    <>
      <Cookie width="300" height="300" />
      <div>Simple cookie svg Icon</div>
    </>
  );
}
​
export default App;
```

### 01.26
- nuble에서 진행하는 챌린지 프로젝트 만듬(다른 색깔 찾기 게임 구현)
- 데모 보고 2시간 걸릴 줄 알고 했는데 이틀 걸림
- 기능은 거의 구현했고 코드가 너무 지저분해서 내일 정리하고 배포해서 제출해야되서 이건 내일 할 예정

### 01.27
- 다른 색깔 찾기 게임 코드 정리(불필요한 props제거, 함수 로직 변경)
- 스테이지 올라갈수록 두 random컬러가 비슷해지게 만듬 (rgb값 255에서 0 ~ 100-stage사이의 숫자를 빼주는 식으로 구현함)
- 컴포넌트 최적화 (useCallback, memo 적용)

### 01.30
- 코드 오류 조금 수정
- 구현 과정 글 포스팅 https://hoime.tistory.com/38?category=534509
- netlify 배포 https://61f6b66cc78544388ab430ee--diff-color-game.netlify.app

### 02.03
- redux사용해서 todo-list 만들어봄
- 디자인은 구글 검색해서 다운 받아서 클론함 (https://www.kindpng.com/imgv/ixJmiTJ_todo-list-template-app-hd-png-download/)
- 수정하는 부분 에러나서 해결함
  - update하는 함수를 dispatch할 때 id값이 필요한데 map함수로 넣어준 key값을 id로 쓰니까 안됨
  ```js
   <StyleList>
      {todos.map((todo) => (
        todo.updated ?
        (<TodoUpdateForm key={todo.id} todo={todo} />):( <TodoItem key={todo.id} todo={todo} />)
      ))}
    </StyleList>
  ```
- todo 객체를 넘겨줘서 updateForm 에서 const {id} = todo; 이렇게 사용하니까 정상 동작 하더라
- 수정하는 updateForm 디자인 아직 덜함 나머지는 전부 구현완료

### 02.04
- updateForm css 수정
- updateForm 렌더링 되면 input에 포커스 되게 

### 03.19~21
- nextJS tutorial
- the movie db에 openAPI 사용 (fetch)
- csr ssr 개념 

### 03.27
- redex-toolkit 기본 개념 공부
- 공식 문서 위주로 공부 후 counter, todolist 예제 만들어 봄
- createAsyncThunk 나 RTK 쿼리는 아직 잘 모르겠음
- redux-toolkit 사용한 비동기 요청 하는 방법 위주로 공부할 예정

### 03.29 ~ 30
- diff-color-game 리팩토링
- props 부모에서 전달하는 것 아니라
- useReducer 사용하여 전역적으로 관리
- 커스텀 훅 사용하여 코드 간결하게

### 04.03 ~ 05
- react-intersection-observer 라이브러리 사용해서 인피니트 스크롤 구현
- openAPI 사용하여 영화 정보 20개씩 받아오고 스크롤이 가장 아래로 내려가면 20개 씩 계속 요청
- redux-toolkit 사용하여 createAsyncThunk 사용하여 비동기 요청
- 영화 세부 정보를 모달 식으로 
