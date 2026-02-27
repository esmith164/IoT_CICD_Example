import { describe, it, expect } from "vitest";
import { isOverheating } from "../temperature";

describe("isOverheating() additional checks", () => {
  it("returns true for extreme heat (150 degrees)", () => {
    expect(isOverheating(150)).toBe(true);
  });

  it("returns false for freezing temperature (0 degrees)", () => {
    expect(isOverheating(0)).toBe(false);
  });
});