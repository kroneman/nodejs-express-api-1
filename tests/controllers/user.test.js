const { expect } = require("chai");

const request = require("supertest");
const createApp = require("../../server/app");

// Check out the following
// https://medium.com/ssense-tech/a-battle-tested-strategy-for-automated-api-testing-f3278bd2df0a
describe("The User Controller", () => {
  describe("Creating a user", () => {
    it("Should be able to create a user with a firstName and a lastName", async () => {
      const server = await createApp();

      const response = await request(server).post("/api/users").send({
        firstName: "test_first_name",
        lastName: "test_last_name",
      });

      const { user } = response.body;
      // 201: Created status code
      expect(response.statusCode).to.equal(201);
      expect(user).to.not.be.null;
      expect(user).to.include.all.keys("id", "createdAt", "updatedAt");

      expect(user).to.own.include({
        firstName: "test_first_name",
        lastName: "test_last_name",
        email: null,
        password: null,
      });
    });
  });
});
