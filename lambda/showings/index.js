import got from 'got'
import api from '../api'
import processShowingTimes from './util'

// These need to be saved/cached but not returned to user
// User doesn't need to know showtimes
// Maybe the times processing isn't necessary here
export const extractListing = (listing, times) => ({
  title: listing.Title,
  description: listing.Plot,
  poster: listing.Poster,
  runtime: listing.Runtime,
  times: processShowingTimes(times, listing.Runtime)
})
// Needs error handling for when the fetched film is not the one we are looking for (e.g. original rather than sequel)
export const buildListing = showing =>
  got(api.fetchFilm(showing), { json: true })
    .then(({ body }) => extractListing(body, showing.times))
    .catch(error => {
      console.log(`film ${showing.title} not found in OMDB: ${error.message}`)
      return {}
    })

// can also take a day offset
export const getListingsForCinemaAndDate = (
  { cinema, date },
  context,
  callback
) =>
  got(api.fetchShowings(cinema, getOffset(date)), {
    json: true
  })
    .then(({ body }) =>
      callback(null, body.listing.map(showing => buildListing(showing)))
    )
    .catch(error => callback(error, null))

export default getListingsForCinemaAndDate
