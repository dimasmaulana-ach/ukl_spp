const express = require('express')
const router = express.Router()
const {getRole, addRole, getRolebyId, updateRole, deleteRole} = require('./role.controller')

router.get('/', getRole)
router.get('/:id', getRolebyId)
router.post('/', addRole),
router.put('/:id', updateRole)
router.delete('/:id', deleteRole)

module.exports = router