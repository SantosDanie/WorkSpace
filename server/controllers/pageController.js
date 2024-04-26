const fs	= require("fs");
const path	= require("path");
const Page	= require("../models/page");
const User	= require("../models/User");

const getPages = async (req, res, next) => {
	const userId = req.params.userId ? req.params.userId : null;
	try {
		if (!userId) {
			const err = new Error("User is not authenticated.");
			err.statusCode = 401;
			throw err;
		}
	
		const user = await User.findById(userId);

		if (!user) {
			const err = new Error("Could not find user by id.");
			err.statusCode = 404;
			throw err;
		}

		const pages = await Page.find({creator: userId});
		res.status(200).json({
			message: "Fetched pages successfully.",
			pages: pages,
		});
	} catch (err) {
		next(err);
	}
};
  
const getPage = async (req, res, next) => {
	const pageId = req.params.pageId;
	try {
		const page = await Page.findById(pageId);
		
		if (!page) {
			const err = new Error("Could not find page by id.");
			err.statusCode = 404;
			throw err;
		}

		res.status(200).json({
			message: "Fetched page successfully.",
			page: page,
		});
	
		// const creatorId = page.creator ? page.creator.toString() : null;
		// if ((creatorId && creatorId === userId) || !creatorId) {
		// 	res.status(200).json({
		// 		message: "Fetched page successfully.",
		// 		page: page,
		// 	});
		// } else {
		// 	const err = new Error("User is not authenticated.");
		// 	err.statusCode = 401;
		// 	throw err;
		// }
	} catch (err) {
		next(err);
	}
};
  
const createPage = async (req, res, next) => {
	const userId	= req.body.userId;
	const blocks	= req.body.blocks;
	const Title		= req.body.name;
	const settings	= req.body.settings;

	const page = new Page({
		title: Title,
		creator: userId || null,
		blocks: blocks || null,
		settings: settings || null
	});

	try {
		const savedPage = await page.save();
	
		res.status(201).json({
			message: "Created page successfully.",
			pageId: savedPage._id.toString(),
			blocks: blocks,
			creator: userId || null,
		});
	} catch (err) {
		next(err);
	}
};
  
const putPage = async (req, res, next) => {
	const pageId = req.params.pageId;
	const blocks = req.body.blocks;
	const title = req.body.title;

	try {
		const page = await Page.findById(pageId);
		if (!page) {
			const err = new Error("Could not find page by id.");
			err.statusCode = 404;
			throw err;
		} else {
			page.blocks = blocks;
			page.title = title;
			const savedPage = await page.save();
			res.status(200).json({
				message: "Updated page successfully.",
				page: savedPage,
			});
		}
	} catch (err) { next(err); }
};
  
const deletePage = async (req, res, next) => {
	const userId = req.userId;
	const pageId = req.params.pageId;
  
	try {
		const page = await Page.findById(pageId);
	
		if (!page) {
			const err = new Error("Could not find page by id.");
			err.statusCode = 404;
			throw err;
		}
	
		const creatorId = page.creator ? page.creator.toString() : null;
		if ((creatorId && creatorId === userId) || !creatorId) {
			const deletedPage = await Page.findByIdAndDelete(pageId);
	
			// Update user collection too
			if (creatorId) {
				const user = await User.findById(userId);
				if (!user) {
					const err = new Error("Could not find user by id.");
					err.statusCode = 404;
					throw err;
				}
				user.pages.splice(user.pages.indexOf(deletedPage._id), 1);
				await user.save();
			}
	
			// Delete images folder too (if exists)
			const dir = `images/${pageId}`;
			fs.access(dir, (err) => {
				// If there is no error, the folder does exist
				if (!err && dir !== "images/") {
					fs.rmdirSync(dir, { recursive: true });
				}
			});
	
			res.status(200).json({
				message: "Deleted page successfully.",
			});
		} else {
			const err = new Error("User is not authenticated.");
			err.statusCode = 401;
			throw err;
		}
	} catch (err) {
		next(err);
	}
};
  
const postImage = (req, res, next) => {
	if (req.file) {
		const imageUrl = req.file.path;
		res.status(200).json({
			message: "Image uploaded successfully!",
			imageUrl: imageUrl,
		});
	} else {
		const error = new Error("No image file provided.");
		error.statusCode = 422;
		throw error;
	}
};
  
const deleteImage = (req, res, next) => {
	const imageName = req.params.imageName;
	if (imageName) {
		const imagePath = `images/${imageName}`;
		clearImage(imagePath);
		res.status(200).json({
			message: "Deleted image successfully.",
		});
	} else {
		const error = new Error("No imageName provided.");
		error.statusCode = 422;
		throw error;
	}
};
  
const clearImage = (filePath) => {
	filePath = path.join(__dirname, "..", filePath);
	fs.unlink(filePath, (err) => console.log(err));
};

exports.getPages	= getPages;
exports.getPage		= getPage;
exports.createPage	= createPage;
exports.putPage		= putPage;
exports.deletePage	= deletePage;
exports.postImage	= postImage;
exports.deleteImage	= deleteImage;