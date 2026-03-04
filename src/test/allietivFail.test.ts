import { describe, it, expect } from "vitest";

describe("Allietiv failing test", () => {
  it("should fail intentionally", () => {
    expect(5 + 5).toBe(11);
  });
});