var express = require('express')
var router = express.Router()
var controller = require('../controllers/product')

router.post('/', controller.add)
router.get('/', controller.readAll)
router.get('/:id', controller.readOne)
router.put('/', controller.update)
router.delete('/:id', controller.delete)

module.exports = router
