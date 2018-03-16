import { transform, forLocation } from './list'
import { cinemasInBrum } from './sample-data'

describe('transforms raw cinema data', () => {
  test('only shows Cineworlds', () => {
    const cineworlds = transform(cinemasInBrum)
    expect(cineworlds).toHaveLength(3)
  })

  test('only includes name and id', () => {
    const transformed = transform(cinemasInBrum)
    expect(Object.keys(transformed[0])).toEqual(['id', 'name'])
  })
})

describe('fetches cinemas in Brum', () => {
  test('fetches cinemas in Brum', async () => {
    const event = { location: 'Birmingham' }
    const context = ''
    const callback = (error, response) => {
      expect(response.length).toBeGreaterThan(0)
    }

    await forLocation(event, context, callback)
  })
})
