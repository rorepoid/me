import Link from 'next/link'

const Navbar = () => (
  <header className='header' role='heading'>
    <nav className='nav'>
      <Link href='/'>
        <a className='logo'>rorepoid</a>
      </Link>
      <div className='navbar-menu'>
        <Link href='/posts'>
          <a className='page-link'>posts</a>
        </Link>
        <Link href='/vocaloid'>
          <a className='page-link'>vocaloid</a>
        </Link>
      </div>
    </nav>
  </header>
)

export default Navbar
