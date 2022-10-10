const models = require("./../../models/index");
const pembayaran = models.pembayaran;

module.exports = {
  getData: async (req, res) => {
    await pembayaran
      .findAll({
        attributes: [
          "id_pembayaran",
          "id_petugas",
          "id_siswa",
          "tgl_bayar",
          "bulan_spp",
          "tahun_spp",
          "nominal",
        ],
        include: [
          {
            model: models.petugas,
            as: 'petugas',
            attributes:["id_petugas", "username", "nama_petugas", "role"]
          },
          {
            model: models.siswa,
            as: 'siswa',
            attributes:["id_siswa", "nis", "name", "id_kelas", "alamat", "no_telp"]
          }
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
  getDatabyId: async (req, res) => {
    let id = { id_pembayaran: req.params.id };
    await pembayaran
      .findAll({
        attributes: [
          "id_pembayaran",
          "id_petugas",
          "id_siswa",
          "tgl_bayar",
          "bulan_spp",
          "tahun_spp",
          "nominal",
        ],
        include: [
          {
            model: models.petugas,
            as: 'petugas',
            attributes:["id_petugas", "username", "nama_petugas", "role"]
          },
          {
            model: models.siswa,
            as: 'siswa',
            attributes:["id_siswa", "nis", "name", "id_kelas", "alamat", "no_telp"]
          }
        ],
        where: id
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
  addData: async (req, res) => {
    let { id_petugas, id_siswa, tgl_bayar, bulan_spp, tahun_spp, nominal } =
      req.body;
    let data = {
      id_petugas: id_petugas,
      id_siswa: id_siswa,
      tgl_bayar: tgl_bayar,
      bulan_spp: bulan_spp,
      tahun_spp: tahun_spp,
      nominal: nominal,
    };
    await pembayaran
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
  updateData: async (req, res) => {
    let id = { id_pembayaran: req.params.id };
    let { id_petugas, id_siswa, tgl_bayar, bulan_spp, tahun_spp, nominal } =
      req.body;
    let data = {
      id_petugas: id_petugas,
      id_siswa: id_siswa,
      tgl_bayar: tgl_bayar,
      bulan_spp: bulan_spp,
      tahun_spp: tahun_spp,
      nominal: nominal,
    };
    await pembayaran
      .update(data, {where: id})
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
  deleteData: async(req, res)=> {
    let id = { id_pembayaran: req.params.id };
    await pembayaran.destroy({where: id})
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
  }
};
