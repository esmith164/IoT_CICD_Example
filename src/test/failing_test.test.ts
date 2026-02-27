import { expect, test } from "vitest";

test("intentional failing test for CI demo", () => {
  expect(true).toBe(false);
});