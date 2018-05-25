import moment from 'moment'

const getOffset = date =>
  date ? moment(date, 'YYYY-MM-DD').diff(moment().format('YYYY-MM-DD'), 'd') : 0

const processShowingTimes = (times, runtime) =>
  times.map(time => ({
    start: time,
    end: addRuntime(time, numbersOnly(runtime))
  }))

const numbersOnly = string => string.replace(/\D/g, '')

const addRuntime = (time, runtime) =>
  moment(time, 'HH:mm')
    .add(runtime, 'm')
    .format('HH:mm')

export { processShowingTimes, getOffset }
