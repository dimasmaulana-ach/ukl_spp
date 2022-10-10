const express = require("express");
const router = express.Router();
const { getSiswa, addSiswa, getSiswabyId, updateSiswa, deleteSiswa } = require("./siswa.controller");

router.get("/", getSiswa);
router.get("/:id", getSiswabyId);
router.post("/", addSiswa);
router.put("/:id", updateSiswa);
router.delete("/:id", deleteSiswa);


module.exports = router;
