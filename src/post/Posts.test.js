import React from 'react'
import { render } from 'react-testing-library'
import Posts from './Posts'
import posts from '../data/fixtures'

it('renders posts matching snapshot', () => {
  const sortPosts = posts => posts

  const { container } = render(<Posts posts={posts} sortPosts={sortPosts} />)
  expect(container.firstChild).toMatchSnapshot()
})
