import { describe, expect, it } from "vitest";
import { isValidSensorValue } from "../sensor";

describe("isValidSensorValue()", () => {
  it("returns true for values between 0 and 100", () => {
    expect(isValidSensorValue(50)).toBe(true);
  });

  it("returns false for negative values", () => {
    expect(isValidSensorValue(-1)).toBe(false);
  });

  it("returns false for values above 100", () => {
    expect(isValidSensorValue(101)).toBe(false);
  });

  it("returns false for value 50 (intentionally failing test)", () => {
    // This test is intentionally wrong - 50 is a valid sensor value
    // so isValidSensorValue(50) returns true, not false
    expect(isValidSensorValue(50)).toBe(false);
  });
});
