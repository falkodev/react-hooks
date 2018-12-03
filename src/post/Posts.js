import React from 'react'
import Post from './RenderPost'

const RenderPosts = props => {
  const sortByTag = () => {
    const newPosts = props.posts.sort((a, b) =>
      a.tags[0].trim().localeCompare(b.tags[0].trim()),
    )
    props.sortPosts(newPosts)
  }

  const sortByNumber = () =>
    props.sortPosts(props.posts.sort((a, b) => a.number - b.number))

  return (
    <div className="posts">
      <div className="posts__buttons">
        <button onClick={sortByTag}>Sort by tag</button>&nbsp;
        <button onClick={sortByNumber}>Sort by number</button>
      </div>
      <div className="posts__render">
        {props.posts.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </div>
    </div>
  )
}

export default RenderPosts
