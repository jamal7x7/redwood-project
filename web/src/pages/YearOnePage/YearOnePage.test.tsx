import { render } from '@redwoodjs/testing/web'

import YearOnePage from './YearOnePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('YearOnePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<YearOnePage />)
    }).not.toThrow()
  })
})
