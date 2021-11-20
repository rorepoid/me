import axios from 'axios'

export default class SongsRepository {
  async getAll () {
    const url = 'https://vocadb.net/api/users/18422/ratedSongs?groupByRating=true&pvServices=Youtube&maxResults=10&getTotalCount=true&sort=FavoritedTimes&fields=PVs&lang=English'
    const response = await axios.get(url)

    if (!response.data?.items) {
      return []
    }

    return response.data.items.map(item => ({
      title: item.song.name,
      url: item.song.pvs.find(pv => pv.service === 'Youtube').url
    }))
  }
}
