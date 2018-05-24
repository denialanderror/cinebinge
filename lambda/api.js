import API_KEY from './const'

const fetchCinemas = location =>
  `https://api.cinelist.co.uk/search/cinemas/location/${location}`

const fetchShowings = cinema =>
  `https://api.cinelist.co.uk/get/times/cinema/${cinema}`

const fetchFilm = ({ title }) =>
  `http://wwww.omdbapi.com/?apikey=${API_KEY}&t=${title.replace(' ', '+')}`

export default { fetchCinemas, fetchShowings, fetchFilm }
