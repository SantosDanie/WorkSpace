const express = require('express')
const router = express.Router()
const mediaControllers = require('../../controllers/mediaControllers')

router.get('/all/:id', mediaControllers.getMedias)

router.get('/:id', mediaControllers.getMedia)

router.post('/', mediaControllers.createMedia)

router.patch('/:id', mediaControllers.updateMedia)

router.delete('/:id', mediaControllers.deleteMedia)

router.delete('/all/:id', mediaControllers.deleteAll)

module.exports = router