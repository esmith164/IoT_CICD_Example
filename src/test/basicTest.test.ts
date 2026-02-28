import { describe, it, expect } from 'vitest';

describe('basic passing test', () => {
  it('adds numbers correctly', () => {
    expect(2 + 2).toBe(4);
  });
});