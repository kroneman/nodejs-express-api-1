const { expect } = require("chai");

const request = require("supertest");
const createApp = require("../../server/app");

// Check out the following
// https://medium.com/ssense-tech/a-battle-tested-strategy-for-automated-api-testing-f3278bd2df0a
describe("/api/users", () => {
  it("creates", async () => {
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

  it("reads all", async () => {
    const server = await createApp();

    const response = await request(server).get(`/api/users`);

    const { users } = response.body;
    const [firstUser] = users;
    // 201: Created status code
    expect(response.statusCode).to.equal(200);
    expect(firstUser).to.not.be.null;

    expect(firstUser).to.include.all.keys("id", "createdAt", "updatedAt", "firstName", "lastName", "email", "password");
  });

  it("reads", async () => {
    const server = await createApp();
    const firstResponse = await request(server).get(`/api/users`);
    const { users } = firstResponse.body;
    const [firstUser] = users;
    const userId = firstUser.id;

    const response = await request(server).get(`/api/users/${userId}`)

    const { user } = response.body;
    // 201: Created status code
    expect(response.statusCode).to.equal(200);
    expect(user).to.not.be.null;
    expect(user.id).to.equal(userId);
    
    expect(user).to.include.all.keys("id", "createdAt", "updatedAt", "firstName", "lastName", "email", "password");
  });

  it("updates with a put", async () => {
    const server = await createApp();
    const firstResponse = await request(server).get(`/api/users`);
    const { users } = firstResponse.body;
    const [firstUser] = users;
    const userId = firstUser.id;

    const response = await request(server).put(`/api/users/${userId}`).send({
      firstName: 'Updated'
    });

    const { user } = response.body;
    // 201: Created status code
    expect(response.statusCode).to.equal(200);
    expect(user).to.not.be.null;
    expect(user.id).to.equal(userId);
    expect(user).to.include.all.keys("id", "createdAt", "updatedAt", "firstName", "lastName", "email", "password");

    // Values not included in put update should be unset as the whole record is replaced
    expect(user).to.own.include({
      lastName: null,
      email: null,
      password: null
    });
  });

  it("updates with a patch", async () => {
    const server = await createApp();
    const firstResponse = await request(server).get(`/api/users`);
    const { users } = firstResponse.body;
    const [firstUser] = users;
    const userId = firstUser.id;

    const response = await request(server).patch(`/api/users/${userId}`).send({
      firstName: 'Updated FirstName'
    });

    const { user } = response.body;
    // 201: Created status code
    expect(response.statusCode).to.equal(200);
    expect(user).to.not.be.null;
    expect(user.id).to.equal(userId);

    expect(user).to.include.all.keys("id", "createdAt", "updatedAt", "firstName", "lastName", "email", "password");
    // Values not included in put update should be unset as the whole record is replaced

    const expected = {
      ...firstUser,
      firstName: 'Updated FirstName'
    };

    delete expected.createdAt;
    delete expected.updatedAt;
    delete expected.Projects;
    expect(user).to.own.include({ ...expected });
  });

  it("deletes", async () => {
    const server = await createApp();
    const firstResponse = await request(server).get(`/api/users`);
    const { users } = firstResponse.body;
    const [firstUser] = users;
    const userId = firstUser.id;

    const response = await request(server).delete(`/api/users/${userId}`);
    const { message } = response.body;

    expect(response.statusCode).to.equal(204);
  });
});
