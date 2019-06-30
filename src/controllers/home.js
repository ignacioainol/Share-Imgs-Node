const ctrl = {};

const { Image } = require('../models');

ctrl.index = async (req,res) => {
	const images = await Image.find().sort({ timestamp: -1 });
	await Image.find();
	res.render("index",{images: images });
};

module.exports = ctrl;