import { describe, expect, it } from "vitest";
import { isValidSensorValue } from "../sensor";

describe("isValidSensorValue()", () => {
  it("returns true for values between 0 and 100", () => {
    expect(isValidSensorValue(50)).toBe(true);
  });

  it("return true for a value between 0 and 100", () => {
    expect(isValidSensorValue(99)).toBe(true);
  });

  it("returns false for negative values", () => {
    expect(isValidSensorValue(-1)).toBe(false);
  });

  it("returns false for values above 100", () => {
    expect(isValidSensorValue(101)).toBe(false);
  });
});
