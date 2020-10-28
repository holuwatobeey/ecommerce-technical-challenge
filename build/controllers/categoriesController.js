'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable class-methods-use-this */


var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CategoriesController = function () {
  function CategoriesController() {
    _classCallCheck(this, CategoriesController);
  }

  _createClass(CategoriesController, [{
    key: 'getAllCategories',
    value: function getAllCategories(req, res) {
      _models2.default.Category.findAll().then(function (categories) {
        return res.status(200).send({
          success: 'true',
          message: 'Categories retrieved successfully',
          data: categories
        });
      });
    }
  }, {
    key: 'getCategory',
    value: function getCategory(req, res) {
      var id = parseInt(req.params.id, 10);
      _models2.default.Category.findByPk(id).then(function (category) {
        if (category) {
          return res.status(200).send({
            success: 'true',
            message: 'Category retrieved successfully',
            data: category
          });
        }
        return res.status(404).send({
          success: 'false',
          message: 'Category does not exist'
        });
      });
    }
  }, {
    key: 'createCategory',
    value: function createCategory(req, res) {
      if (!req.body.name) {
        return res.status(400).send({
          success: 'false',
          message: 'Name is required'
        });
      }

      var category = {
        name: req.body.name
      };
      _models2.default.Category.create(category).then(function (category) {
        return res.status(201).send({
          success: 'true',
          message: 'Category added successfully',
          data: category
        });
      });
    }
  }, {
    key: 'updateCategory',
    value: function updateCategory(req, res) {
      var id = parseInt(req.params.id, 10);
      _models2.default.Category.findByPk(id).then(function (category) {
        if (category) {
          category.update(req.body).then(function (result) {
            // return result.dataValues
            return res.status(200).send({
              success: 'true',
              message: 'Category updated successfully',
              data: result.dataValues
            });
          });
        } else {
          return res.status(404).send({
            success: 'false',
            message: 'Category does not exist'

          });
        }
      });
    }
  }, {
    key: 'deleteCategory',
    value: function deleteCategory(req, res) {
      var id = parseInt(req.params.id, 10);
      _models2.default.Category.findByPk(id).then(function (category) {
        if (category) {
          category.destroy(req.body).then(function (result) {
            return res.status(200).send({
              success: 'true',
              message: 'Category deleted successfully'
            });
          });
        } else {
          return res.status(404).send({
            success: 'false',
            message: 'Category does not exist'

          });
        }
      });
    }
  }]);

  return CategoriesController;
}();

var categoryController = new CategoriesController();
exports.default = categoryController;
//# sourceMappingURL=categoriesController.js.map