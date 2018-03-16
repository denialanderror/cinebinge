import got from 'got'

// rename to search
export const forLocation = ({ location }, context, callback) =>
  got(`https://api.cinelist.co.uk/search/cinemas/location/${location}`, {
    json: true
  })
    .then(response => callback(null, transform(response.body)))
    .catch(error => callback(error, null))

export const transform = ({ cinemas }) =>
  cinemas
    .filter(cinema => cinema.name.toLowerCase().includes('cineworld'))
    .map(cinema => ({ id: cinema.id, name: cinema.name }))

export default forLocation
