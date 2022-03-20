import Navbar from './Navbar';

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