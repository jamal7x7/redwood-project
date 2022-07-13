import { render } from '@redwoodjs/testing/web'

import CourseArticlePage from './CourseArticlePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CourseArticlePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CourseArticlePage />)
    }).not.toThrow()
  })
})
