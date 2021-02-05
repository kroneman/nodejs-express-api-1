const { User, Project } = require("../models");

module.exports = class UserController {
  static async create(req, res) {
    try {
      const user = await User.create(req.body);
      return res.status(201).json({ user });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async readAll(req, res) {
    try {
      const users = await User.findAll({
        include: [
          {
            model: Project,
          },
        ],
      });
      return res.status(200).json({ users });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async read(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findOne({
        where: { id: id },
        include: [
          {
            model: Project,
          },
        ],
      });

      if (user) {
        return res.status(200).json({ user });
      }

      return res.status(404).send("User with the specified ID does not exists");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async updatePatch(req, res) {
    try {
      const { id } = req.params;
      const [updated] = await User.update(req.body, {
        where: { id: id },
      });

      if (updated) {
        const updatedUser = await User.findOne({ where: { id: id } });
        return res.status(200).json({ user: updatedUser });
      }

      throw new Error("User not found");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async updatePut(req, res) {
    try {
      const { id } = req.params;
      const updateValues = {
        createdAt: new Date(),
        updatedAt: new Date(),
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        Projects: [],
        ...req.body,
      };
      const [updated] = await User.update(updateValues, {
        where: { id: id },
      });

      if (updated) {
        const updatedUser = await User.findOne({ where: { id: id } });
        return res.status(200).json({ user: updatedUser });
      }

      throw new Error("User not found");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async destroy(req, res) {
    try {
      const { id } = req.params;
      const deleted = await User.destroy({
        where: { id: id },
      });

      if (deleted) {
        return res.status(204).send("User Deleted");
      }

      throw new Error("User not found");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
};
