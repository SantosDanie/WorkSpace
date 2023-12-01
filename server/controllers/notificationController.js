const fs			= require("fs");
const path			= require("path");
const Notification	= require('../models/Notification')
const User			= require("../models/User");

const getNotifications = async (req, res, next) => {
	try {
		let userId		= req.params.userId;
		const notification	= await Notification.find({userId: userId})
		res.status(200).json(notification)
	} catch (err) {
		res.status(404).json({ message: err.message })
	}
}

const createNotifications = async (req, res, next) => {
	try {
		const notification	= req.body;
		const media			= await Notification.create(notification)
		res.status(201).json({ message: 'Topic created successfully.'})
	} catch (err) {
		res.status(400).json({ message: err.message })
	}
}

exports.getNotifications	= getNotifications;
exports.createNotifications	= createNotifications;
