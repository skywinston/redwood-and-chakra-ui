import { render } from '@redwoodjs/testing'

import ClientsPage from './ClientsPage'

describe('ClientsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ClientsPage />)
    }).not.toThrow()
  })
})
