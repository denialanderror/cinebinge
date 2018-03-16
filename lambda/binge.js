/*
 * 1. Get films for cinema on date
 * 2. Get runtimes for films
 * 3. Match films based on start times and runtimes
 *  
 */

import got from 'got'
import moment from 'moment'

const API_KEY = '4206a883'

const getUrl = film =>
  `http://img.omdbapi.com/?apikey=${API_KEY}&t=${film.title.replace(' ', '+')}`

const buildListing = film =>
  got(getUrl(film), { json: true })
    .then(({ body }) => ({
      title: film.title,
      times: addTimes(film)
    }))
    .catch(error => {
      console.log(`film ${film.title} not found: ${error.message}`)
      return {}
    })

const addTimes = ({ times }) =>
  times.map(time => ({ start: time, end: addRuntime(body.Runtime) }))

export const addRuntime = (time, runtime) =>
  moment(time, 'HH:mm')
    .add(runtime, 'm')
    .format('HH:mm')

// can also take a day offset
const forCinema = ({ cinema }, context, callback) =>
  got(`https://api.cinelist.co.uk/get/times/cinema/${cinema}`, {
    json: true
  })
    .then(({ body }) =>
      callback(null, body.listing.map(film => buildListing(film)))
    )
    .catch(error => callback(error, null))
