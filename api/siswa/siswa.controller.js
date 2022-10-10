const models = require("./../../models/index");
const siswa = models.siswa;
const bcrypt = require("bcrypt");

module.exports = {
  getSiswa: async (req, res) => {
    await siswa
      .findAll({
        attributes: [
          "id_siswa",
          "nis",
          "name",
          "id_kelas",
          "alamat",
          "no_telp",
        ],
        include: [
          {
            model: models.kelas,
            as: "kelas",
            attributes: ["nama_kelas", "jurusan", "angkatan"],
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
  getSiswabyId: async (req, res) => {
    let id = { id_siswa: req.params.id };
    await siswa
      .findAll({
        attributes: [
          "id_siswa",
          "nis",
          "name",
          "id_kelas",
          "alamat",
          "no_telp",
        ],
        include: [
          {
            model: models.kelas,
            as: "kelas",
            attributes: ["nama_kelas", "jurusan", "angkatan"],
          },
        ],
        where: id,
      })
      .then((result) => {
        res.json({
          status: true,
          message: "successful",
          data: result[0],
        });
      })
      .catch((err) => {
        res.json({
          message: err.message,
        });
      });
  },
  addSiswa: async (req, res) => {
    let { nis, name, password, id_kelas, alamat, no_telp } = req.body;
    let salt = await bcrypt.genSalt();
    let hashPass = await bcrypt.hash(password, salt);
    let data = {
      nis: nis,
      name: name,
      password: hashPass,
      id_kelas: id_kelas,
      alamat: alamat,
      no_telp: no_telp,
    };
    await siswa
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
  updateSiswa: async (req, res) => {
    let id = { id_siswa: req.params.id };
    let { nis, name, password, id_kelas, alamat, no_telp } = req.body;
    let salt = await bcrypt.genSalt();
    let hashPass = await bcrypt.hash(password, salt);
    let data = {
      nis: nis,
      name: name,
      password: hashPass,
      id_kelas: id_kelas,
      alamat: alamat,
      no_telp: no_telp,
    };
    await siswa
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
  deleteSiswa: async (req, res) => {
    let id = { id_siswa: req.params.id };
    await siswa
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
