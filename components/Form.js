import { useState } from 'react'

const Form = (props) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  function handleSubmit (event) {
    event.preventDefault()
    props.submit({ title, content })
    event.target.reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='title'>Title: </label>
      <input
        id='title'
        type='text'
        onChange={event => setTitle(event.target.value)}
      />

      <label htmlFor='content'>Content: </label>
      <textarea
        id='content'
        type='content'
        onChange={event => setContent(event.target.value)}
      />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form
