"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "Bruno",
          lastName: "Doe",
          email: "bruno@doe.com",
          password: "123456789",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Emre",
          lastName: "Smith",
          email: "emre@smith.com",
          password: "123456789",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "John",
          lastName: "Stone",
          email: "john@stone.com",
          password: "123456789",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
