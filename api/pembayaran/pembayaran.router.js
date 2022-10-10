const express = require('express')
const router = express.Router()
const {getData, addData, getDatabyId, updateData, deleteData} = require('./pembayaran.controller')

router.get('/', getData)
router.get('/:id', getDatabyId)
router.post('/', addData)
router.put('/:id', updateData)
router.delete('/:id', deleteData)

module.exports = router