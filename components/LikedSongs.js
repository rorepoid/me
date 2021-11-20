import { useEffect, useState } from 'react'

const showLikedSongs = async (repository, setSongs) => {
  const songs = await repository.getAll()
  setSongs(songs)
}

const LikedSongs = ({ songsRepository }) => {
  const [songs, setSongs] = useState([])

  useEffect(() => {
    showLikedSongs(songsRepository, setSongs)
  }, [])

  return (
    <section>
      <h1>Vocaloid songs I like</h1>
      <div>
        {songs.map((song, index) => (
          <div key={index}>
            <h2>{song.title}</h2>
            <a
              className='default-link'
              target='_blank'
              rel='noreferrer'
              href={song.url}
              title={song.title}
            >Listen
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default LikedSongs
