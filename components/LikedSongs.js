const songs = [{
  title: 'Humanly',
  url: 'https://youtube.com'
}]

const LikedSongs = () => (
  <section>
    <h1>Vocaloid songs I like</h1>
    <div>
      {songs.map((song, index) => (
        <div key={index}>
          <h2>{song.title}</h2>
          <a className='default-link' href={song.url} target='_blank' title={song.title} rel='noreferrer'>Listen</a>
        </div>
      ))}
    </div>
  </section>
)

export default LikedSongs
