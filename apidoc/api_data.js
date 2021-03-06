define({ "api": [
  {
    "type": "post",
    "url": "/products/",
    "title": "Create a new product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodName",
            "description": "<p>The title of product</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodDesc",
            "description": "<p>The description of inserted product</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "prodPrice",
            "description": "<p>The price of product</p>"
          }
        ]
      }
    },
    "name": "CreateProduct",
    "group": "Products",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>The status of current operation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message from the server about error or success insertion</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/productsRouter.js",
    "groupTitle": "Products"
  },
  {
    "type": "delete",
    "url": "/products/:id",
    "title": "Delete specific product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The unique ID of product which we want to delete</p>"
          }
        ]
      }
    },
    "name": "DeleteProduct",
    "group": "Products",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>The status of current operation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message from the server about error or success insertion</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/productsRouter.js",
    "groupTitle": "Products"
  },
  {
    "type": "get",
    "url": "/products/",
    "title": "Request all products",
    "name": "GetAllProducts",
    "group": "Products",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>The status of current get</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>The array of products in DB</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/productsRouter.js",
    "groupTitle": "Products"
  },
  {
    "type": "get",
    "url": "/products/:id",
    "title": "Request a specific product by its id",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Product unique ID</p>"
          }
        ]
      }
    },
    "name": "GetProduct",
    "group": "Products",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>The status of current get</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>One element array with a product in case if product exists</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/productsRouter.js",
    "groupTitle": "Products"
  },
  {
    "type": "put",
    "url": "/products/:id",
    "title": "Update a specific product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The unique ID of product which we want to update</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodName",
            "description": "<p>The title of product</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodDesc",
            "description": "<p>The description of inserted product</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "prodPrice",
            "description": "<p>The price of product</p>"
          }
        ]
      }
    },
    "name": "UpdateProduct",
    "group": "Products",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>The status of current operation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message from the server about error or success insertion</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/productsRouter.js",
    "groupTitle": "Products"
  }
] });
