import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import CreatePost from './CreatePost'

it('adds a post', () => {
  const posts = []
  const addPost = post => {
    post.id = posts.length + 1
    posts.push(post)
  }

  const { getByTestId, getByLabelText } = render(
    <CreatePost addPost={addPost} />,
  )
  const input = getByLabelText('Content')
  fireEvent.change(input, { target: { value: 'test' } })
  fireEvent.click(getByTestId('submit'))

  expect(posts.length).toBe(1)
})
