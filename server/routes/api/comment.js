const express				= require('express')
const router				= express.Router()
const commentControllers	= require('../../controllers/commentController')

router.get('/all/:id',		commentControllers.getComments)
router.get('/:id',			commentControllers.getComment)
router.post('/',			commentControllers.putComment)
router.delete('/:id',		commentControllers.deleteComment)
router.delete('/all/:id',	commentControllers.deleteComments)
module.exports				= router