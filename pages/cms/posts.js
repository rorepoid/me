import axios from 'axios'
import { useState } from 'react'
import Form from '../../components/Form'

const Posts = () => {
  const [posts, setPosts] = useState([])

  function createPost (data) {
    axios.post('https://jsonplaceholder.typicode.com/posts', data)
      .then(response => response.data)
      .then(newPost => setPosts([...posts, newPost]))
  }
  return (
    <>
      <h1>Create a new post</h1>
      <Form submit={createPost} />
      <section>
        {posts.map((post, index) => (
          <article key={index}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </article>
        ))}
      </section>
    </>
  )
}

export default Posts
