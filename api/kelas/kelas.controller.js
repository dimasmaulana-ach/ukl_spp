const models = require("./../../models/index");
const kelas = models.kelas;

module.exports = {
  getKelas: async (req, res) => {
    await kelas
      .findAll({
        attributes: ["id_kelas", "nama_kelas", "jurusan", "angkatan"],
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
  getKelasbyId: async (req, res) => {
    let id = { id_kelas: req.params.id };
    await kelas
      .findAll({
        attributes: ["id_kelas", "nama_kelas", "jurusan", "angkatan"],
        where: id
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
  addKelas: async (req, res) => {
    let { nama, jurusan, angkatan } = req.body;
    let data = {
      nama_kelas: nama,
      jurusan: jurusan,
      angkatan: angkatan,
    };
    console.log(req.body);
    await kelas
      .create(data)
      .then((result) => {
        res.json({
          status: true,
          message: "successful",
          data: result,
          data,
        });
      })
      .catch((err) => {
        res.json({
          message: err.message,
        });
      });
  },
  updateKelas: async (req, res) => {
    let id = { id_kelas: req.params.id };
    let { nama, jurusan, angkatan } = req.body;
    let data = {
      nama_kelas: nama,
      jurusan: jurusan,
      angkatan: angkatan,
    };
    await kelas
      .update(data, {
        where: id,
      })
      .then((result) => {
        res.json({
          status: true,
          message: "successful",
          data: result,
          data,
        });
      })
      .catch((err) => {
        res.json({
          message: err.message,
        });
      });
  },
  deleteKelas: async (req, res) => {
    let id = { id_kelas: req.params.id };
    await kelas.destroy({
      where: id,
    })
    .then((result)=> {
        res.json({
            status: true,
            message: "successful",
            data: result,
          });
    })
    .catch(err=> {
        res.json({
            message: err.message
        })
    })
  },
};
