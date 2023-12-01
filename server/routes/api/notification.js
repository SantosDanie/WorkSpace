const express				= require('express')
const router				= express.Router()
const isAuth				= require("../../middleware/isAuth");
const activitiesController	= require("../../controllers/notificationController");

router.get('/:userId',		isAuth, activitiesController.getNotifications)
router.post('/',			activitiesController.createNotifications)
module.exports				= router