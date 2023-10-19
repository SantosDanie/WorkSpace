const express				= require('express')
const router				= express.Router()
const projectControllers	= require('../../controllers/ProjectController')
const authMiddleware		= require('../../middleware/auth')
const multer				= require('multer')

let storage					= multer.diskStorage({
	destination: (req, file, cb)	=> { cb(null, './uploads')},
	filename: (req, file, cb)		=> { cb(null, file.fieldname + '_' + Date.now() + '_' + file.originalname) }
});
let upload					= multer({ storage: storage}).single('image');
router.get('/',				projectControllers.getProjects)
router.get('/:id',			projectControllers.getProject)
router.post('/',			upload, projectControllers.createProject)
router.patch('/:id',		upload, projectControllers.updateProject)
router.delete('/:id',		projectControllers.deleteProject)
module.exports				= router