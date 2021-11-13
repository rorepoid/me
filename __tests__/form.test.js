/* global describe, it, jest, expect */

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Form from '../components/Form'

describe('When user fills in and submits form', () => {
  it('submit method is called with title and content', () => {
    const submit = jest.fn()
    render(<Form submit={submit} />)

    const title = screen.getByLabelText(/title/i)
    userEvent.type(title, 'Padoru padoru')

    const content = screen.getByLabelText(/content/i)
    userEvent.type(content, "Life's too short")

    const button = screen.getByRole('button', { name: /submit/i })
    userEvent.click(button)

    expect(submit).toHaveBeenCalledWith({
      title: 'Padoru padoru',
      content: "Life's too short"
    })
  })
})
