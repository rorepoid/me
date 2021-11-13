import Link from 'next/link'

const Navbar = () => (
  <header className='header'>
    <nav className='nav'>
      <Link href='/'>
        <a className='logo'>rorepoid</a>
      </Link>
      <Link href='/posts'>
        <a className='page-link'>posts</a>
      </Link>
    </nav>
  </header>
)

export default Navbar
