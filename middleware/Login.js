const models = require("./../models/index");
const petugas = models.petugas;
const siswa = models.siswa;
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();

app.post("/login", async (req, res) => {
  try {
    try {
      const User = await petugas.findAll({
        attributes: [
          "id_petugas",
          "username",
          "nama_petugas",
          "role",
          "password",
        ],
        include: [
          {
            model: models.role,
            as: "roles",
            attributes: ["name"],
          },
        ],
        where: {
          username: req.body.username,
        },
      });
      const match = await bcrypt.compare(req.body.password, User[0].password);
      if (!match) return res.status(400).json({ message: "Password Salah" });
      const petugasId = User[0].id_petugas;
      const name = User[0].username;
      let token = jwt.sign({ petugasId, name }, process.env.TOKEN);
      res.json({
        logged: true,
        data: User[0],
        token: token,
        status: "001",
      });
    } catch (error) {
      const User = await siswa.findAll({
        attributes: [
          "id_siswa",
          "nis",
          "name",
          "id_kelas",
          "alamat",
          "no_telp",
          "password",
        ],
        include: [
          {
            model: models.kelas,
            as: "kelas",
            attributes: ["nama_kelas", "jurusan", "angkatan"],
          },
        ],
        where: {
          name: req.body.username,
        },
      });
      const match = await bcrypt.compare(req.body.password, User[0].password);
      if (!match) return res.status(400).json({ message: "Password Salah" });
      const siswaId = User[0].id_siswa;
      const name = User[0].name;
      let token = jwt.sign({ siswaId, name }, process.env.TOKEN);
      res.json({
        logged: true,
        data: User[0],
        token: token,
        status: "002",
      });
    }
  } catch (error) {
    res.status(404).json({ message: "Username atau Name Tidak Ditemukan" });
    console.log(error);
  }
});

module.exports = app;
