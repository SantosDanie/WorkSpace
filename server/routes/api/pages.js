const express						= require('express');
const isAuth						= require("../../middleware/isAuth");
const pageController				= require("../../controllers/pageController");
const router						= express.Router();
const multer						= require('multer')

let storage							= multer.diskStorage({
	destination: (req, file, cb)	=> { cb(null, './uploads') },
	filename: (req, file, cb)		=> { cb(null, file.fieldname + '_' + Date.now() + '_' + file.originalname) }
});
let upload							= multer({ storage: storage }).single('image');
router.patch("/:pageId",			isAuth, pageController.putPage); 
router.get("/edit/:pageId",			isAuth, pageController.getPage);
router.get("/:userId",				isAuth, pageController.getPages);
router.post("/images/",				upload, pageController.postImage);
router.post("/",					isAuth, pageController.createPage);
router.delete("/:pageId",			isAuth, pageController.deletePage);
router.delete("/images/:imageName",	upload, pageController.deleteImage);
module.exports						= router;
