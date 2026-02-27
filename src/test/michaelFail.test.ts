import { describe, expect, it } from "vitest";
import request from "supertest";
import { app } from "../index";

describe("Express app (intentionally failing)", () => {
  it("GET / returns wrong expected message", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    // Wrong expectation: actual is "Hello from Node.js TypeScript App!"
    expect(res.text).toBe("Oopsie daisy");
  });
});
