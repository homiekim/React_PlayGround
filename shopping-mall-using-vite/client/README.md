# note

### vite랑 CRA 다른점?
- vite는 개발환경에서 ES6의 에서 제공하는 모듈을 그대로 사용 -> 빠름
- ES6의 모듈을 그대로 쓴다는 건 번들링 하는 과정이 없음
- 원래 번들링해주는 도구가 webpack
- 웹팩은 초기에 모든 페이지를 로딩하기 때문에 초기 로딩이 느림 (첫 로딩 이후 hmr(hot module replacement) 방식)

## MSW(Mock Service Worker)
- mock 데이터로 서버가 있는 것 처럼 구현
- api 완성 되지 않은 상황에서 프론트 개발을 할 때 사용
