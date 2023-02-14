const request = require("supertest");
const app = require("../app");
const db = require("../db/connection");
const seed = require("../db/seed");

describe("POST /api/restaurants", () => {
  it("responds with a 201 created status", () => {
    const newRestaurant = {
      restaurant_name: "The Codfather",
      area_id: 2,
      cuisine: "British",
      website: "www.thecodfather.com",
    };
    return request(app)
      .post("/api/restaurants")
      .send(newRestaurant)
      .expect(201)
      .then((res) => {
        expect(res.body.restaurant).toEqual({
          restaurant_id: 9,
          ...newRestaurant,
        });
      });
  });
});
