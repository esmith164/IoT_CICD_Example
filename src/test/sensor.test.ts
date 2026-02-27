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

  it("returns true for boundary values 0 and 100", () => {
    expect(isValidSensorValue(0)).toBe(true);
    expect(isValidSensorValue(100)).toBe(true);
  });

  it("intentionally fails: rejects numeric string input", () => {
    expect(isValidSensorValue("50" as unknown as number)).toBe(false);
  });
});
