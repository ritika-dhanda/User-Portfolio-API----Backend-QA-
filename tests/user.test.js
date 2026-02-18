const mongoose = require("mongoose");
test("Dummy test", () => {
  expect(true).toBe(true);
});

afterAll(async () => {
  await mongoose.connection.close();
});
