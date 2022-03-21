import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const StyleNav = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  a {
    font-weight: 600;
    font-size: 18px;
  }
  .active {
    color: tomato;
  }
  div {
    display: flex;
    gap: 10px;
  }
`;

const Navbar = () => {
  const router = useRouter();
  console.log(router);
  return (
    <StyleNav>
      <img style={{ maxWidth: 100, marginBottom: 5 }} src="/vercel.svg" alt='logo' />
      <div>
        <Link href="/">
          <a className={router.pathname === "/" ? "active" : ""}>Home </a>
        </Link>
        <Link href="/about">
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
      </div>
    </StyleNav>
  );
};

export default Navbar;
