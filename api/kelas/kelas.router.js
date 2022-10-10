const express = require("express");
const router = express.Router();
const {
  getKelas,
  getKelasbyId,
  addKelas,
  updateKelas,
  deleteKelas,
} = require("./kelas.controller");

router.get("/", getKelas);
router.get("/:id", getKelasbyId);
router.post("/", addKelas);
router.put("/:id", updateKelas);
router.delete("/:id", deleteKelas);

module.exports = router;
