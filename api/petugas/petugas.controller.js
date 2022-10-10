const models = require("./../../models/index");
const petugas = models.petugas;
const bcrypt = require("bcrypt");

module.exports = {
  getPetugas: async (req, res) => {
    await petugas
      .findAll({
        attributes: ["id_petugas", "username", "nama_petugas", "role"],
        include: [
          {
            model: models.role,
            as: "roles",
            attributes: ["name"],
          },
        ],
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
  getPetugasbyId: async (req, res) => {
    let id = { id_petugas: req.params.id };
    await petugas
      .findAll({
        attributes: ["id_petugas", "username", "nama_petugas", "role"],
        include: [
          {
            model: models.role,
            as: "roles",
            attributes: ["name"],
          },
        ],
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
  addPetugas: async (req, res) => {
    let { username, password, nama_petugas, role } = req.body;
    let salt = await bcrypt.genSalt();
    let hashPass = await bcrypt.hash(password, salt);
    let data = {
      username: username,
      password: hashPass,
      nama_petugas: nama_petugas,
      role: role,
    };
    await petugas
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
  updatePetugas: async (req, res) => {
    let id = { id_petugas: req.params.id };
    let { username, password, nama_petugas, role } = req.body;
    let salt = await bcrypt.genSalt();
    let hashPass = await bcrypt.hash(password, salt);
    let data = {
      username: username,
      password: hashPass,
      nama_petugas: nama_petugas,
      role: role,
    };
    await petugas
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
  deletePetugas: async (req, res) => {
    let id = { id_petugas: req.params.id };
    await petugas
      .destroy({ where: id })
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
