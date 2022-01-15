import Layout from '../components/Layout'
import { Link } from '../components/Link'

const Home = () => (
  <Layout>
    <div className='main'>
      <p><span className='badge badge-primary'>Hi 👋, I'm Roberto Orellana</span>, a backend developer in Lima - Perú.</p>
      <p>For some reason I really like <Link className='page-link' href='/vocaloid'>vocaloid songs</Link></p>
      <p>I'm currently working with Laravel and PHP 🐘, but in my free time I'm <span className='badge badge-red'>learning Rust</span> 🦀</p>
    </div>
  </Layout>
)

export default Home
