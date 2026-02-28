import { describe, it, expect } from 'vitest';

describe('intentional failing test', () => {
  it('should fail', () => {
    expect(2 + 2).toBe(5);
  });
});