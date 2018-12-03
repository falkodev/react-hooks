import React from 'react'
import { render } from 'react-testing-library'
import Post from './RenderPost'

it('renders a post and displays content as markdown', () => {
  const post = {
    number: 1,
    content: '**test**',
    tags: ['test1', 'test2'],
    author: 'Test Test',
  }
  const { container, getByText } = render(<Post post={post} />)
  expect(container.firstChild).toMatchSnapshot()
  expect(getByText('test')).toBeInTheDocument()
})
