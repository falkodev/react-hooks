import React from 'react'
import PropTypes from 'prop-types'
import Markdown from 'react-remarkable'
import './RenderPost.css'

const Post = props => {
  const post = props.post
  return (
    <div className="post">
      <div className="post__content">
        <Markdown>{post.content}</Markdown>
      </div>
      <div className="post__tags">{post.tags}</div>
      <div className="post__author">{post.author}</div>
    </div>
  )
}

Post.propTypes = {
  number: PropTypes.number,
  content: PropTypes.string,
  tags: PropTypes.array,
  author: PropTypes.string,
}

export default Post
