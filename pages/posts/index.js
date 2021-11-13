import axios from 'axios'
import Layout from '../../components/Layout'
import Link from 'next/link'

const Blog = ({ posts }) => (
  <Layout>
    <div className='main'>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={post.canonical_url}>
              <a className='default-link'>{post.title}</a>
            </Link>
            <p className='metadata'> Published: {new Date(post.published_at).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)

export async function getStaticProps () {
  const response = await axios.get('https://dev.to/api/articles?username=rorepoid')
  const posts = response.data || []
  return {
    props: {
      posts
    }
  }
}

export default Blog
