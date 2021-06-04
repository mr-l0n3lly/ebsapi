const util = require('util')
const conn = require('../db/db')

const productModel = {}

productModel.getAll = async () => {
	const query = util.promisify(conn.query).bind(conn)
	const result = await query(`SELECT * FROM products_db`)

	if (!result) {
		return []
	}

	return result
}

productModel.getById = async (id) => {
	const query = util.promisify(conn.query).bind(conn)
	const result = await query(`
		SELECT * FROM ${process.env.DB_NAME}
		WHERE product_id = '${id}'
	`)

	if (!result) {
		return []
	}

	return result
}

productModel.create = async ({prodName, prodDesc, prodPrice}) => {
	const query = util.promisify(conn.query).bind(conn)
	const today = new Date()
	const result = await query(`
		INSERT INTO ${process.env.DB_NAME} (product_title, product_desc, product_price, created_at) VALUES (
			'${prodName}', '${prodDesc}', ${prodPrice}, '${today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDay()}'
		)
	`)

	return result.affectedRows
}

productModel.change = async (newData) => {
	const query = util.promisify(conn.query).bind(conn)
	const today = new Date()


	const result = await query(`
		UPDATE ${process.env.DB_NAME}
		SET
			product_title = '${newData.prodName}',
			product_desc = '${newData.prodDesc}',
			product_price = ${newData.prodPrice},
			created_at = '${today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDay()}'
		WHERE
			product_id = ${newData.id}
	`)

	return result.affectedRows
}

productModel.delete = async (id) => {
	const query = util.promisify(conn.query).bind(conn)

	const result = await query(`
		DELETE FROM ${process.env.DB_NAME} WHERE product_id = ${id}
	`)

	return result.affectedRows
}


module.exports = productModel