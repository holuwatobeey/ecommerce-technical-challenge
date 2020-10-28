'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _productsController = require('../controllers/productsController');

var _productsController2 = _interopRequireDefault(_productsController);

var _categoriesController = require('../controllers/categoriesController');

var _categoriesController2 = _interopRequireDefault(_categoriesController);

var _usersController = require('../controllers/usersController');

var _usersController2 = _interopRequireDefault(_usersController);

var _checkValidToken = require('../middlewares/checkValidToken');

var _checkValidToken2 = _interopRequireDefault(_checkValidToken);

var _isAdmin = require('../middlewares/isAdmin');

var _isAdmin2 = _interopRequireDefault(_isAdmin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/api/v1', function (req, res) {
    res.status(200).json({
        status: 'Success',
        message: 'Welcome to My Online Shop Api v1.0.0'
    });
});

router.post('/api/v1/users/login', _usersController2.default.signIn);
router.post('/api/v1/users/register', _usersController2.default.signUp);

router.get('/api/v1/products', _checkValidToken2.default, _productsController2.default.getAllProducts);
router.get('/api/v1/products/:id', _checkValidToken2.default, _productsController2.default.getProduct);
router.post('/api/v1/products', _isAdmin2.default, _productsController2.default.createProduct);
router.put('/api/v1/products/:id', _isAdmin2.default, _productsController2.default.updateProduct);
router.delete('/api/v1/products/:id', _checkValidToken2.default, _productsController2.default.deleteProduct);

router.get('/api/v1/categories', _checkValidToken2.default, _categoriesController2.default.getAllCategories);
router.get('/api/v1/categories/:id', _checkValidToken2.default, _categoriesController2.default.getCategory);
router.post('/api/v1/categories', _isAdmin2.default, _categoriesController2.default.createCategory);
router.put('/api/v1/categories/:id', _isAdmin2.default, _categoriesController2.default.updateCategory);
router.delete('/api/v1/categories/:id', _categoriesController2.default.deleteCategory);

exports.default = router;
//# sourceMappingURL=index.js.map