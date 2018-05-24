import got from 'got'
import api from '../api'
import processShowingTimes from './util'

// Needs error handling for when the fetched film is not the one we are looking for (e.g. original rather than sequel)
const buildListing = showing =>
  got(api.fetchFilm(showing), { json: true })
    .then(({ body }) => ({
      title: body.Title,
      description: body.Plot,
      poster: body.Poster,
      runtime: body.Runtime,
      times: processShowingTimes(showing.times, body.Runtime)
    }))
    .catch(error => {
      console.log(`film ${showing.title} not found in OMDB: ${error.message}`)
      return {}
    })

// can also take a day offset
const forCinema = ({ cinema }, context, callback) =>
  got(api.fetchShowings(cinema), {
    json: true
  })
    .then(({ body }) =>
      callback(null, body.listing.map(showing => buildListing(showing)))
    )
    .catch(error => callback(error, null))
