import { describe, it, expect } from "vitest";
import { isOverheating } from "../temperature";

describe("isOverheating() failing test", () => {
  it("incorrectly expects 80 degrees is not overheating", () => {
    expect(isOverheating(80)).toBe(false);
  });
});