import list, { transform } from './list'
import { data } from './sample-data'

describe('transforms raw cinema data', () => {
  test('only shows Cineworlds', () => {
    const cineworlds = transform(data)
    expect(cineworlds).toHaveLength(3)
  })

  test('only includes name and id', () => {
    const transformed = transform(data)
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

    await list.forLocation(event, context, callback)
  })
})
