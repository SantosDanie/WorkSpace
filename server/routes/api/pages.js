const express			= require('express');
const isAuth			= require("../../middleware/isAuth");
const pageController	= require("../../controllers/pageController");
const router			= express.Router();
const multer			= require('multer')

let storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './uploads')
	},
	filename: (req, file, cb) => {
		cb(null, file.fieldname + '_' + Date.now() + '_' + file.originalname)
	}
});
let upload = multer({ storage: storage }).single('image');

router.get("/:pageId",			isAuth, pageController.getPages);
router.get("/edit/:pageId",		isAuth, pageController.getPage);
router.post("/",				isAuth, pageController.postPage);
router.patch("/:pageId",		isAuth, pageController.putPage); 
router.delete("/:pageId",		isAuth, pageController.deletePage);
router.post("/images/",			upload, pageController.postImage);
router.delete("/images/:imageName", upload, pageController.deleteImage);
module.exports = router;
