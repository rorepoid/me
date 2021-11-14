/* global describe, it, expect */

import { render, screen } from '@testing-library/react'
import LikedSongs from '../components/LikedSongs'

describe('When user go to liked songs view', () => {
  it('Show first 10 of my favorite songs', () => {
    const songs = [{
      title: 'Humanly',
      url: 'https://youtube.com'
    }]

    render(<LikedSongs />)

    const title = screen.getByText(songs[0].title)
    const url = screen.getByTitle(songs[0].title)

    expect(title).toBeInTheDocument()
    expect(url).toBeInTheDocument()
    expect(url).toHaveAttribute('href')
    expect(url).toHaveTextContent('Escuchar')
  })
})
