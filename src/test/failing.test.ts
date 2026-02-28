import { describe, it, expect } from "vitest";

describe("intentional failure", () => {
  it("demonstrates a failing test", () => {
    expect(2 + 2).toBe(5);
  });
});
