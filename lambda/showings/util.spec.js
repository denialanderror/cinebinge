import { processShowingTimes, getOffset } from './util'
import moment from 'moment'

describe('processShowingTimes', () => {
  test('add runtimes to times', () => {
    const times = ['12:51', '13:59', '15:00']
    const runtime = '69 min'

    const expected = [
      {
        start: '12:51',
        end: '14:00'
      },
      {
        start: '13:59',
        end: '15:08'
      },
      {
        start: '15:00',
        end: '16:09'
      }
    ]

    expect(processShowingTimes(times, runtime)).toEqual(expected)
  })
})

describe('getOffset', () => {
  test('when date is undefined', () => {
    expect(getOffset(undefined)).toEqual(0)
  })
  test('when date is two days after now', () => {
    const date = moment().add(2, 'd')
    expect(getOffset(date)).toEqual(2)
  })
})
