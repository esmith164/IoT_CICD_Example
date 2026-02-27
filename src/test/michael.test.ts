import { describe, expect, it } from "vitest";
import request from "supertest";
import { app } from "../index";

describe("Express app", () => {
  it("GET / returns hello message", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.text).toBe("Hello from Node.js TypeScript App!");
  });
});
