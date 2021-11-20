import Layout from 'components/Layout'
import LikedSongs from 'components/LikedSongs'
import SongsRepository from '../src/SongsRepository'

const songsRepository = new SongsRepository()

const Vocaloid = () => (
  <Layout>
    <div className='main'>
      <h1>About</h1>
      <p>
        Vocaloid can have many meanings: a voice synthesizer software, a
        voicebank, a character, the trademark name or the general name for a franchise.
      </p>
      <p>My current favorite vocaloid is Gumi.</p>
      <img
        src='https://i.pinimg.com/originals/c9/46/e5/c946e50b5d31dd58820598845702f6a1.jpg'
        className='favorite-vocaloid-img'
      />
      <p>
        <a
          href='https://youtu.be/2EFTcQPKgII'
          target='_blank'
          rel='noreferrer'
          className='default-link'
        >
          Odds & Ends
        </a>
        &nbsp;is one of my favorite vocaloid songs of all time and the most
        important one for me, because after reading its lyrics (subtitles), I
        really started to feel a lot of emotions about vocaloid and vocalo-P's.
      </p>
      <LikedSongs songsRepository={songsRepository} />
    </div>
  </Layout>
)

export default Vocaloid
