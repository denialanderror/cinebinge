import { addRuntime } from './binge'

describe('addRuntime', () => {
  test('adds runtime to time', () => {
    const added = addRuntime('12:51', '69')
    expect(added).toEqual('14:00')
  })
})
