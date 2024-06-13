const express				= require('express')
const router				= express.Router()
const multer				= require('multer')
const mediaControllers		= require('../../controllers/mediaControllers')

let storage					= multer.diskStorage({
	destination: (req, file, cb)	=> { cb(null, './uploads') },
	filename: (req, file, cb)		=> { cb(null, file.fieldname + '_' + Date.now() + '_' + file.originalname) }
});
let upload					= multer({ storage: storage }).single('image');

router.get('/:id',			mediaControllers.getMedia)
router.get('/all/:id',		mediaControllers.getMedias)
router.delete('/all/:id',	mediaControllers.deleteAll)
router.patch('/:id',		mediaControllers.updateMedia)
router.delete('/:id',		mediaControllers.deleteMedia)
router.post('/',			upload, mediaControllers.createMedia)
module.exports				= router