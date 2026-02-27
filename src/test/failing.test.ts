import { describe, it, expect } from "vitest";

describe("intentional failure", () => {
  it("fails on purpose", () => {
    expect(2 + 2).toBe(5);
  });
});