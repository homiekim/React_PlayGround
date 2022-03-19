import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link href='/'>
        <a style={{ color : router.pathname === '/' ? 'red' : 'blueviolet'}}>Home </a>      
      </Link>
      <Link href='/about'>
        <a style={{ color : router.pathname === '/about' ? 'red' : 'blueviolet'}}>About</a>      
      </Link>
    </nav>
  );
}

export default Navbar;