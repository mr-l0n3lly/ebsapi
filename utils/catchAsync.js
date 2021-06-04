module.exports = (fn) => (req, res, next) => {
	fn(req, res).catch((err) => {
		next(err)
		res.status(500).json({
			status: false,
			message: 'Something wrong on the server',
		})
	})
}