import { describe, it, expect } from "vitest";
import { shouldTurnOnFan } from "../turnOnFan";

describe("shouldTurnOnFan (extra passing tests)", () => {
  it("returns false below threshold", () => {
    expect(shouldTurnOnFan(29.9)).toBe(false);
  });

  it("returns true at and above threshold", () => {
    expect(shouldTurnOnFan(30)).toBe(true);
    expect(shouldTurnOnFan(45)).toBe(true);
  });
});