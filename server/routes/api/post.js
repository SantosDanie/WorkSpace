const express			= require('express')
const router			= express.Router()
const postControllers	= require('../../controllers/postController')
const authMiddleware	= require('../../middleware/auth')
const multer			= require('multer')
let storage				= multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './uploads')
	},
	filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + '_' + file.originalname)
    }
});
let upload				= multer({
	storage: storage
}).single('image');
router.get('/',			postControllers.getPosts)
router.get('/:id',		postControllers.getPost)
router.post('/',		upload, postControllers.createPost)
router.patch('/:id',	upload, postControllers.updatePost)
router.delete('/:id',	postControllers.deletePost)
module.exports = router