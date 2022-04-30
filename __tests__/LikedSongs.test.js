/* global describe, it, expect, jest */

import { act, render, screen } from '@testing-library/react'
import SongsRepository from '../src/SongsRepository'
import LikedSongs from '../components/LikedSongs'

jest.mock('../src/SongsRepository')

const songs = [
  {
    title: 'Solar System Disco',
    url: 'https://youtu.be/CXmhBCc2lEg',
    thumbUrl: 'https://i.ytimg.com/vi/CXmhBCc2lEg/hq720.jpg'
  },
  {
    title: 'Humanly',
    url: 'https://www.youtube.com/watch?v=0qY9rsBAKPk',
    thumbUrl: 'https://i.ytimg.com/vi/0qY9rsBAKPk/hq720.jpg'
  }
]

describe('When user go to liked songs view', () => {
  it('Show first some of my favorite songs', async () => {
    const songsRepository = new SongsRepository()
    songsRepository.getAll.mockResolvedValue(songs)

    await act(async () => {
      render(<LikedSongs songs={songs} />)
    })

    const songCard = screen.getByRole('link', {
      name: 'Humanly'
    })

    const songThumb = songCard.querySelector('img')

    expect(songCard).toBeInTheDocument()
    expect(songThumb).toBeInTheDocument()

    songsRepository.getAll.mockReset()
  })
})
