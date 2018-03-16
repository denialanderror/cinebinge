import got from 'got'

const forLocation = ({ location }, context, callback) =>
  got(`https://api.cinelist.co.uk/search/cinemas/location/${location}`, {
    json: true
  })
    .then(response => callback(null, transform(response.body)))
    .catch(error => callback(error, null))

export const transform = ({ cinemas }) =>
  cinemas
    .filter(c => c.name.toLowerCase().includes('cineworld'))
    .map(c => ({ id: c.id, name: c.name }))

export default { forLocation }
