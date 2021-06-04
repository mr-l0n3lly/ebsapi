const router = require('express').Router()
const productsController = require('../controllers/products.controller')

/**
 * @api {get} /products/ Request all products
 * @apiName GetAllProducts
 * @apiGroup Products
 *
 * @apiSuccess {Boolean} status The status of current get
 * @apiSuccess {Array} data The array of products in DB
 */
router.get('/', productsController.index)

/**
 * @api {get} /products/:id Request a specific product by its id
 * @apiParam {Number} id Product unique ID
 * @apiName GetProduct
 * @apiGroup Products
 *
 * @apiSuccess {Boolean} status The status of current get
 * @apiSuccess {Array} data One element array with a product in case if product exists
 */
router.get('/:id', productsController.getById)

/**
 * @api {post} /products/ Create a new product
 *
 * @apiParam {String} product_title The title of product
 * @apiParam {String} product_desc The description of inserted product
 * @apiParam {Number} product_price The price of product
 *
 * @apiName CreateProduct
 * @apiGroup Products
 *
 * @apiSuccess {Boolean} status The status of current operation
 * @apiSuccess {String} message The message from the server about error or success insertion
 */
router.post('/', productsController.create)

/**
 * @api {put} /products/:id Update a specific product
 *
 * @apiParam {Number} product_id The unique ID of product which we want to update
 * @apiParam {String} product_title The title of product
 * @apiParam {String} product_desc The description of inserted product
 * @apiParam {Number} product_price The price of product
 *
 * @apiName UpdateProduct
 * @apiGroup Products
 *
 * @apiSuccess {Boolean} status The status of current operation
 * @apiSuccess {String} message The message from the server about error or success insertion
 */
router.put('/:id', productsController.modify)


/**
 * @api {delete} /products/:id Delete specific product
 *
 * @apiParam {Number} product_id The unique ID of product which we want to delete
 *
 * @apiName DeleteProduct
 * @apiGroup Products
 *
 * @apiSuccess {Boolean} status The status of current operation
 * @apiSuccess {String} message The message from the server about error or success insertion
 */
router.delete('/:id', productsController.remove)

module.exports = router