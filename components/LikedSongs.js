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
            <a
              target='_blank'
              rel='noreferrer'
              href={song.url}
              title={song.title}
            >
              <h4 className='default-link'>{song.title}</h4>
              <img src={song.thumbUrl} alt={song.title} />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default LikedSongs
