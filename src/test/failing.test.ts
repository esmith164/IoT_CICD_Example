import { describe, it, expect } from "vitest";

describe("intentional failure", () => {
  it("fails on purpose", () => {
    expect(1).toBe(2);
  });
});
