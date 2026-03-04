import { describe, expect, it } from "vitest";
import { isValidSensorValue } from "../sensor";

describe("Is true ()", () => {

  it("returns true always for negative values", () => {
    expect(-1).toBe(1);
  });

});
