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

// GET /page
router.get("/:pageId", isAuth, pageController.getPages);

// GET /page/{id}
router.get("/edit/:pageId", isAuth, pageController.getPage);

// POST /page
router.post("/", isAuth, pageController.postPage);

// PUT /page/{id}
router.patch("/:pageId", isAuth, pageController.putPage); 

// DELETE /page/{id}
router.delete("/:pageId", isAuth, pageController.deletePage);

// POST /page/images
router.post("/images/", upload, pageController.postImage);

// DELETE /page/images/{name}
router.delete("/images/:imageName", upload, pageController.deleteImage);

module.exports = router;
