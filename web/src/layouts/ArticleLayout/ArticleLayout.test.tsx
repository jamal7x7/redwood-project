import { render } from '@redwoodjs/testing/web'

import ArticleLayout from './ArticleLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ArticleLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ArticleLayout />)
    }).not.toThrow()
  })
})
