'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable class-methods-use-this */


var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProductsController = function () {
  function ProductsController() {
    _classCallCheck(this, ProductsController);
  }

  _createClass(ProductsController, [{
    key: 'getAllProducts',
    value: function getAllProducts(req, res) {
      _models2.default.Product.findAll().then(function (products) {
        return res.status(200).send({
          success: 'true',
          message: 'Products retrieved successfully',
          data: products
        });
      });
    }
  }, {
    key: 'getProduct',
    value: function getProduct(req, res) {
      var id = parseInt(req.params.id, 10);
      _models2.default.Product.findByPk(id).then(function (product) {
        if (product) {
          return res.status(200).send({
            success: 'true',
            message: 'Product retrieved successfully',
            data: product
          });
        }
        return res.status(404).send({
          success: 'false',
          message: 'Product does not exist'
        });
      });
    }
  }, {
    key: 'createProduct',
    value: function createProduct(req, res) {
      if (!req.body.name) {
        return res.status(400).send({
          success: 'false',
          message: 'Name is required'
        });
      }
      if (!req.body.description) {
        return res.status(400).send({
          success: 'false',
          message: 'Descriotion is required'
        });
      }
      if (!req.body.price) {
        return res.status(400).send({
          success: 'false',
          message: 'Price is required'
        });
      }
      if (!req.body.categoryId) {
        return res.status(400).send({
          success: 'false',
          message: 'At least one category must be given'
        });
      }
      var product = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        categoryId: req.body.categoryId
      };
      _models2.default.Product.create(product).then(function (product) {
        return res.status(201).send({
          success: 'true',
          message: 'Product added successfully',
          data: product
        });
      });
    }
  }, {
    key: 'updateProduct',
    value: function updateProduct(req, res) {
      var id = parseInt(req.params.id, 10);
      _models2.default.Product.findByPk(id).then(function (product) {
        if (product) {
          Product.update(req.body).then(function (result) {
            // return result.dataValues
            return res.status(200).send({
              success: 'true',
              message: 'Product updated successfully',
              data: result.dataValues
            });
          });
        } else {
          return res.status(404).send({
            success: 'false',
            message: 'Product does not exist'

          });
        }
      });
    }
  }, {
    key: 'deleteProduct',
    value: function deleteProduct(req, res) {
      var id = parseInt(req.params.id, 10);
      _models2.default.Product.findByPk(id).then(function (product) {
        if (product) {
          product.destroy(req.body).then(function (result) {
            return res.status(200).send({
              success: 'true',
              message: 'Product deleted successfully'
            });
          });
        } else {
          return res.status(404).send({
            success: 'false',
            message: 'Product does not exist'

          });
        }
      });
    }
  }]);

  return ProductsController;
}();

var productController = new ProductsController();
exports.default = productController;
//# sourceMappingURL=productsController.js.map