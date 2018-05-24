import processShowingTimes from './util'

describe('processShowingTimes', () => {
  test('add runtimes to times', () => {
    const times = ['12:51', '13:59', '15:00']
    const runtime = '69 min'

    expect(processShowingTimes(times, runtime)).toEqual([
      '14:00',
      '15:08',
      '16:09'
    ])
  })
})
