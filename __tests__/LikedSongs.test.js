/* global describe, it, expect, jest */

import { act, render, screen } from '@testing-library/react'
import SongsRepository from '../src/SongsRepository'
import LikedSongs from '../components/LikedSongs'

jest.mock('../src/SongsRepository')

const songs = [
  {
    title: 'Humanly',
    url: 'https://youtube.com'
  },
  {
    title: 'Melt',
    url: 'https://youtube.com'
  }
]

describe('When user go to liked songs view', () => {
  it('Show first some of my favorite songs', async () => {
    const songsRepository = new SongsRepository()
    songsRepository.getAll.mockResolvedValue(songs)

    await act(async () => {
      render(<LikedSongs songsRepository={songsRepository} />)
    })

    const songCard = screen.getByRole('link', {
      name: 'Humanly'
    })

    expect(songCard).toBeInTheDocument()

    songsRepository.getAll.mockReset()
  })
})
