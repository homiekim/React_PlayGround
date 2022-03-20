# NextJS Introduction 

## Framework vs Library
- library는 개발자가 불러와서 사용하는 것
- framework는 개발자가 쓴 코드를 불러와서 사용하는 것
- library는 내가 원할 때 언제든지 불러와서 사용 가능합니다.
- framework에선 특정한 규칙(파일 이름이나 구조 등..)을 따라야 함, 정해진 규칙에 따라 특정한 곳에 나의 코드를 삽입해야 합니다

## pages
- pages 폴더 내부의 파일 이름으로 next에서 라우팅 해줌
- 이때 컴포넌트 이름은 중요하지 않지만 export default 되어 있어야함
- pages에 없는 파일인 경우 next 404에러 페이지 보여 줌
- index.js 의 경우 특정 주소를 가지지 않음 '/' 주소(index.js 는 앱이 시작하는 파일이라고 생각)
- import react from 'react' 생략 가능(단 Hooks 쓸 때는 import 해줘야 함)

## Static Pre Rendering
- nextJS의 장점 중 하나는 앱에 있는 페이지들이 미리 렌더링 되는 것(이 페이지들은 정적(`static`)으로 생성 됨)
- CRA로 만든 앱는 CSR(`client-side-rendering`)을 함

### CSR(`client-side-rendering`)
- CSR이란 브라우저가 유저가 보는 UI를 만드는 모든 것을 한다는 것을 의미
- react.js로 렌더링된 컴포넌트 들은 유저가 보는 브라우저의 HTML 소스코드에 들어 있지 않음
- 브라우저가 자바스크립트(react.js) 다운로드 받고 실행하여 브라우저에 렌더링 하게 됨
- 즉, 첫 화면은 빈 화면이라고 할 수 있다.

### SSR(`server-side-rendering`) 
- 유저가 보는 첫 화면에 html이 포함 되어있음
- 페이지가 미리 렌더링 되는것 nextJS에 의해
- 인터넷이 느리거나 자바스크립트가 비활성화 되도 유저는 html을 볼 수 있다.
- 단 api를 통해 데이터를 받아오는데 까지 시갈이 걸릴 수는 있다.


### hydration
- 첫 로딩 시 앱의 초기 상태로 미리 렌더링 해서 html 파일로 보여주는 것(pre rendering)
- 로딩 시 많은 자바스크립트를 필요로 하는데 로딩 후 react.js가 페이지를 넘겨 받아서 SPA 처럼 동작하게 한다.
- react.js를 프론트 안에서 실행하게 하는 것을 hydration 이라고 한다.
- nextJS는 react.js를 벡엔드에 요청 해서 미리 페이지를 만드는데 첫 로딩시 데이터가 들어있는 html 파일을 렌더링 하게 된다.
- 즉, 유저는 자바스크립트가 로딩 되지 않아도 html을 먼저 볼 수 있게 됨 이후에 JS가 로딩 되어서 일반적인 react 앱으로 동작

## Routing
- next에서 페이지 이동시 <a>태그 사용시 ESLint 에러
- a태그 사용시 브라우저 전체가 새로 고침 되기 때문에 next에서 제공하는 라우터기능 사용(리액트에서는 react-router-dom 사용)
- next 에서는 Link 컴포넌트 존재
- Link 컴포넌트에 href를 명시해서 사용하고 Link 컴포넌트 내부에 <a>태그 사용하여 className, style 등을 지정

### useRouter()
- next에서 제공하는 Hook
- back, pathname 등 location 정보를 얻을 수 있습니다.

## AppComponet와 AppPage
- Global Style을 추가하고 싶을 때는 AppComponent와 AppPage 개념을 알아야 합니다.
- next에서는 style을 적용할 때 page를 고려해야 함

### AppComponent
- AppComponent는 일종의 어떤 컴포넌트의 청사진 입니다
- pages 폴더에 _app.js 파일을 만들면 페이지를 렌더링 하기 전에 이 파일을 먼저 봄
- nextJS는 _app.js 파일을 먼저 자동적으로 호출,
- _app.js가 호출 될때 두가지 컴포넌트를 가짐
  - Component : _app.js가 렌더링 하려는 컴포넌트를 Component 라는 Props로 받음
  - pageProps
- _app.js 를 활용해 Global Style을 작성 할 수 있다.
- next에서 페이지에 css를 import 하려면 모듈형식 이여야함
- _app.js 외에 global css를 import 할 수 없다. 


## Common Patterns
- next를 사용할 때 주로 사용되는 layout pattern이 존재
- 보통 _app.js 에서 처리해줘야 할 일이 많기 때문에 컴포넌트의 크기를 최소화 하는 것이 좋음
- Layout 컴포넌트를 따뤄 둬서 _app.js 안에서 사용하는 방식

```js
// Layout.js
const Layout = ({children}) => {
  return (
    <>
      <Navbar />
      <div>
        {/*  children은 react에서 제공하는 props로 컴포넌트 안에 다른 컴포넌트를 넣을 때 사용 가능 */}
        {children} 
      </div>
    </>
  )
}

export default Layout;

// _app.js
const App = ({Component, pageProps}) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App;
```

## Head
- next 에서는 Head를 설정할 수 있는 컴포넌트를 따로 제공
- CRA에서는 head를 관리하기 위해 react-helmet 같은 라이브러리를 설치해서 사용