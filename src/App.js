import React, { useState } from 'react'
import './App.css'
import CreatePost from './post/CreatePost'
import Posts from './post/Posts'
import postsData from './data/fixtures'

const App = () => {
  const [posts, setPosts] = useState(postsData)

  const addPost = post => {
    post.id = posts.length + 1
    setPosts([...posts, post])
  }

  const sortPosts = posts => {
    setPosts(posts)
    console.log('posts ====> ', posts)
  }

  return (
    <div className="container">
      <h1>Posts app</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add post</h2>
          <CreatePost addPost={addPost} />
        </div>
        <div className="flex-large">
          <h2>View posts</h2>
          <Posts posts={posts} sortPosts={sortPosts} />
        </div>
      </div>
    </div>
  )
}

export default App
