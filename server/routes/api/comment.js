const express				= require('express')
const router				= express.Router()
const commentControllers	= require('../../controllers/commentController')

router.post('/',			commentControllers.putComment)
router.get('/:id',			commentControllers.getComment)
router.get('/all/:id',		commentControllers.getComments)
router.delete('/:id',		commentControllers.deleteComment)
router.delete('/all/:id',	commentControllers.deleteComments)
module.exports				= router