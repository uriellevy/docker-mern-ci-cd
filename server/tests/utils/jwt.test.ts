import { IJWTPayload } from "../../src/interfaces/user";
import { verifyToken, generateToken } from "../../src/utils/jwt";
import { describe, test, expect } from "vitest";

describe("JWT Utility", () => {
  test("should generate a valid token", () => {
    const payload = { _id: "12345", role: "basic" } as IJWTPayload;
    const token = generateToken(payload);
    expect(token).toBeDefined();
  });

  test("should verify a valid token", () => {
    const payload = { _id: "12345", role: "basic" } as IJWTPayload;
    const token = generateToken(payload);
    const decoded = verifyToken(token);
    expect(decoded).toMatchObject(payload);
  });

  test("should return null for an invalid token", () => {
    const decoded = verifyToken("invalid-token");
    expect(decoded).toBeNull();
  });
});