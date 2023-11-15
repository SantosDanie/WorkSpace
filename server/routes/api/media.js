const express				= require('express')
const router				= express.Router()
const mediaControllers		= require('../../controllers/mediaControllers')
const multer				= require('multer')

let storage					= multer.diskStorage({
	destination: (req, file, cb)	=> { cb(null, './uploads') },
	filename: (req, file, cb)		=> { cb(null, file.fieldname + '_' + Date.now() + '_' + file.originalname) }
});
let upload					= multer({ storage: storage }).single('image');

router.get('/all/:id',			mediaControllers.getMedias)
router.get('/:id',			mediaControllers.getMedia)
router.post('/',			upload, mediaControllers.createMedia)
router.patch('/:id',		mediaControllers.updateMedia)
router.delete('/:id',		mediaControllers.deleteMedia)
router.delete('/all/:id',	mediaControllers.deleteAll)
module.exports				= router