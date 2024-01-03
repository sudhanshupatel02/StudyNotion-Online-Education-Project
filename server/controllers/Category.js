const { Mongoose } = require("mongoose");
const Category = require("../models/Category");


//create Category(Tag) ka handler function
exports.createCategory = async (req, res) => {
	try {
    //fetch data
		const { name, description } = req.body;
    //validation
		if (!name || !description) {
			return res
				.status(400)
				.json({ success: false, message: "All fields are required" });
		}
    //create entry in DB
		const CategorysDetails = await Category.create({
			name: name,
			description: description,
		});
		console.log(CategorysDetails);
    //return response
		return res.status(200).json({
			success: true,
			message: "Categorys Created Successfully",
		});
	} catch (error) {
		return res.status(500).json({
			success: true,
			message: error.message,
		});
	}
};

//getAllCategory handler function
exports.showAllCategories = async (req, res) => {
	try {
        console.log("INSIDE SHOW ALL CATEGORIES");
		const allCategorys = await Category.find({});
		res.status(200).json({
			success: true,
			data: allCategorys,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};

