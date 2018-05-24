import moment from 'moment'

const numbersOnly = string => string.replace(/\D/g, '')

const processShowingTimes = (times, runtime) =>
  times.map(time => ({ start: time, end: addRuntime(numbersOnly(runtime)) }))

const addRuntime = (time, runtime) =>
  moment(time, 'HH:mm')
    .add(runtime, 'm')
    .format('HH:mm')

export default processShowingTimes
