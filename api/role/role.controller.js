const models = require("./../../models/index");
const role = models.role;

module.exports = {
  getRole: async (req, res) => {
    await role
      .findAll({
        attributes: ["id", "name"],
      })
      .then((result) => {
        res.json({
          status: true,
          message: "successful",
          data: result,
        });
      })
      .catch((err) => {
        res.json({
          message: err.message,
        });
      });
  },
  getRolebyId: async (req, res) => {
    let id = { id: req.params.id };
    await role
      .findAll({
        attributes: ["id", "name"],
        where: id,
      })
      .then((result) => {
        res.json({
          status: true,
          message: "successful",
          data: result,
        });
      })
      .catch((err) => {
        res.json({
          message: err.message,
        });
      });
  },
  addRole: async (req, res) => {
    let { name } = req.body;
    let data = {
      name: name,
    };
    await role
      .create(data)
      .then((result) => {
        res.json({
          status: true,
          message: "successful",
          data: data,
        });
      })
      .catch((err) => {
        res.json({
          message: err.message,
        });
      });
  },
  updateRole: async (req, res) => {
    let id = { id: req.params.id };
    let { name } = req.body;
    let data = {
      name: name,
    };
    await role
      .update(data, { where: id })
      .then((result) => {
        res.json({
          status: true,
          message: "successful",
          data: data,
        });
      })
      .catch((err) => {
        res.json({
          message: err.message,
        });
      });
  },
  deleteRole: async (req, res) => {
    let id = { id: req.params.id };
    await role
      .destroy({
        where: id,
      })
      .then((result) => {
        res.json({
          status: true,
          message: "successful",
          data: result,
        });
      })
      .catch((err) => {
        res.json({
          message: err.message,
        });
      });
  },
};
