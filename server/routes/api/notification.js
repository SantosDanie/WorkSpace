const express				= require('express')
const router				= express.Router()
const isAuth				= require("../../middleware/isAuth");
const activitiesController	= require("../../controllers/notificationController");

router.post('/',			activitiesController.createNotifications)
router.get('/:userId',		isAuth, activitiesController.getNotifications)
module.exports				= router