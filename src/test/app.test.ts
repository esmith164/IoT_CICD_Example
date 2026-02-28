import { describe, it, expect } from 'vitest'

function addNumbers(a: number, b: number) {
  return a + b
}

describe('Basic arithmetic test suite', () => {
  it('should return 5 when adding 2 and 3', () => {
    expect(addNumbers(2, 3)).toBe(5)
  })

  it('should handle negative numbers', () => {
    expect(addNumbers(-1, -4)).toBe(-5)
  })

  it('should return 0 when adding 0 and 0', () => {
    expect(addNumbers(0, 0)).toBe(0)
  })
})