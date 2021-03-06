import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './CreatePost.css'

const CreatePost = props => {
  const initialState = {
    content: '',
    tags: [],
    author: '',
  }
  const [post, setPost] = useState(initialState)
  const [message, setMessage] = useState('')

  const handleInputChange = event => {
    const { name, value } = event.target
    setMessage('')
    document.getElementById('content').classList.remove('validate-fail')
    setPost({ ...post, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (!post.content) {
      setMessage('Missing field content.')
      document.getElementById('message').classList.add('message-fail')
      document.getElementById('content').classList.add('validate-fail')
      return
    }

    post.tags = [post.tags]
    props.addPost(post, props.setPosts)
    setPost(initialState)
    setMessage('Post added.')
    document.getElementById('message').classList.add('message-success')
  }

  return (
    <form onSubmit={handleSubmit} className="create-post">
      <div className="create-post__content">
        <label htmlFor="content">Content</label>
        <textarea
          name="content"
          id="content"
          value={post.content}
          onChange={handleInputChange}
        />
      </div>
      <div className="create-post__tags">
        <label htmlFor="tags">Tags</label>
        <input
          type="text"
          name="tags"
          id="tags"
          value={post.tags}
          onChange={handleInputChange}
        />
      </div>
      <div className="create-post__author">
        <label htmlFor="author">Author</label>
        <input
          type="text"
          name="author"
          id="author"
          value={post.author}
          onChange={handleInputChange}
        />
      </div>
      <br />
      <input type="submit" data-testid="submit" value="Submit" />
      <label id="message">{message}</label>
    </form>
  )
}

CreatePost.propTypes = {
  content: PropTypes.string,
  tags: PropTypes.array,
  author: PropTypes.string,
}

export default CreatePost
