import { describe, it, expect } from "vitest";
import { shouldTurnOnFan } from "../turnOnFan";

describe("shouldTurnOnFan (intentional failure)", () => {
  it("fails on purpose to show CI catches it", () => {
    expect(shouldTurnOnFan(100)).toBe(false);
  });
});