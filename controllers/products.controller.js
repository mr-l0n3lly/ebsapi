const catchAsync = require('../utils/catchAsync')
const Products = require('../models/product.model')

const productsController = {}


productsController.index = catchAsync(async (req, res) => {
	const products = await Products.getAll()

	res.status(200).json({
		status: true,
		data: products,
	})
})

productsController.getById = catchAsync(async (req, res) => {
	const {id} = req.params
	const product = await Products.getById(id)

	if (!product.length) {
		res.status(404).json({
			status: false,
			message: 'Error no product like this on server',
		})
	} else {
		res.status(200).json({
			status: true,
			data: product,
		})
	}
})

productsController.create = catchAsync(async (req, res) => {
	const {prodName, prodDesc, prodPrice} = req.body

	if (!prodName || !prodDesc || !prodPrice) {
		res.status(400).json({
			status: false,
			message: 'Incomplete data',
		})
	} else {
		const product = {
			prodName,
			prodDesc,
			prodPrice,
		}

		const response = await Products.create(product)

		if (!response) {
			res.status(500).json({
				status: false,
				message: 'Error uploading to bd',
			})
		} else {
			res.status(200).json({
				status: true,
				message: 'Product added successfully',
			})
		}
	}
})

productsController.modify = catchAsync(async (req, res) => {
	const {id, prodName, prodDesc, prodPrice} = req.body

	if (!id || !prodName || !prodDesc || !prodPrice) {
		res.status(400).json({
			status: false,
			message: 'Data missing when modifying',
		})
	} else {
		const response = await Products.change({
			id,
			prodName,
			prodDesc,
			prodPrice,
		})

		if (!response) {
			res.status(500).json({
				status: false,
				message: 'Error modifying the product',
			})
		} else {
			res.status(200).json({
				status: true,
				message: 'Product modified successfully',
			})
		}
	}
})

productsController.remove = catchAsync(async (req, res) => {
	const {id} = req.body

	if (!id) {
		res.status(400).json({
			status: false,
			message: 'Data missing when modifying',
		})
	} else {
		const response = Products.delete(id)

		if (!response) {
			res.status(500).json({
				status: false,
				message: 'Error deleting the product',
			})
		} else {
			res.status(200).json({
				status: true,
				message: 'Product deleted successfully',
			})
		}
	}
})

module.exports = productsController