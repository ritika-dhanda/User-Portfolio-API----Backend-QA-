const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../src/app");

let token;
let userId;

describe("Authentication & Authorization API Tests", () => {

  const dynamicUser = {
    name: "Automation User",
    email: `automation_${Date.now()}@gmail.com`,
    password: "123456"
  };

  // Register
  test("Register new user", async () => {
    const res = await request(app)
      .post("/users/register")
      .send(dynamicUser);

    expect(res.statusCode).toBe(201);
    expect(res.body.data.token).toBeDefined();

    token = res.body.data.token;
    userId = res.body.data._id;
  });

  // Login success
  test("Login with correct credentials", async () => {
    const res = await request(app)
      .post("/users/login")
      .send({
        email: dynamicUser.email,
        password: dynamicUser.password
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.data.token).toBeDefined();
  });

  // Login failure
  test("Login with wrong password", async () => {
    const res = await request(app)
      .post("/users/login")
      .send({
        email: dynamicUser.email,
        password: "wrongpassword"
      });

    expect(res.statusCode).toBe(401);
  });

  // Protected route without token
  test("Access protected route without token", async () => {
    const res = await request(app)
      .get("/users");

    expect(res.statusCode).toBe(401);
  });

  // Protected route with token
  test("Access protected route with token", async () => {
    const res = await request(app)
      .get("/users")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
  });

});

afterAll(async () => {
  await mongoose.connection.close();
});
