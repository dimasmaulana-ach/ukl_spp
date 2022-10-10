const express = require('express')
const router = express.Router()
const {getPetugas, getPetugasbyId, addPetugas, updatePetugas, deletePetugas} = require('./petugas.controller')

router.get('/', getPetugas)
router.get('/:id', getPetugasbyId)
router.post('/', addPetugas)
router.put('/:id', updatePetugas)
router.delete('/:id', deletePetugas)


module.exports = router