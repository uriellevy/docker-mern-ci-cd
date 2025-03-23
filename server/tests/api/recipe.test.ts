import { describe, expect, it } from 'vitest';
import request from "supertest";
import { app } from '../../src';

describe("Recipe Routes", () => {

    let authToken: string;

    it("should get all recipes", async () => {
        const res = await request(app)
          .get("/api/recipes");
      
        console.log(res.body);  // Log response body
        expect(res.status).toBe(200);
        expect(res.body.message).toBe("Recipe Fetched successfully");
        expect(Array.isArray(res.body.recipes)).toBe(true);
      });

});