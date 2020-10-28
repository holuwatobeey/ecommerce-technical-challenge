'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UsersController = function () {
    function UsersController() {
        _classCallCheck(this, UsersController);
    }

    _createClass(UsersController, [{
        key: 'signIn',
        value: function signIn(req, res) {
            var emailValidate = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

            if (!req.body.email) {
                return res.status(400).send({
                    success: 'false',
                    message: 'Email is required'
                });
            }
            if (!req.body.email.match(emailValidate)) {
                return res.status(400).send({
                    success: 'false',
                    message: 'Please enter a valid email address'
                });
            }
            if (!req.body.password) {
                return res.status(400).send({
                    success: 'false',
                    message: 'Password is required'
                });
            }
            _models2.default.User.findOne({ where: { email: req.body.email } }).then(function (user) {
                if (!user) {
                    return res.status(404).send('No user found.');
                }
                var passwordValid = _bcryptjs2.default.compareSync(req.body.password, user.password);
                if (!passwordValid) {
                    return res.status(401).send({
                        success: false,
                        message: 'Password is incorrect',
                        token: null
                    });
                }
                var token = _jsonwebtoken2.default.sign({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                }, process.env.JWT_SECRET, { expiresIn: '24h' });
                return res.status(201).send({
                    success: 'true',
                    message: 'User logged in successfully',
                    name: user.name,
                    email: user.email,
                    token: token
                });
            });
        }
    }, {
        key: 'signUp',
        value: function signUp(req, res) {
            var emailValidate = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

            if (!req.body.name) {
                return res.status(400).send({
                    success: 'false',
                    message: 'Name is required'
                });
            }
            if (!req.body.email) {
                return res.status(400).send({
                    success: 'false',
                    message: 'Email is required'
                });
            }
            if (!req.body.email.match(emailValidate)) {
                return res.status(400).send({
                    success: 'false',
                    message: 'Please enter a valid email address'
                });
            }
            if (!req.body.password) {
                return res.status(400).send({
                    success: 'false',
                    message: 'Password is required'
                });
            }
            _models2.default.User.findOne({
                where: { email: req.body.email }
            }).then(function (userFound) {
                if (userFound) {
                    return res.status(403).send({
                        success: 'false',
                        message: 'A user with that email exists already'
                    });
                }

                var salt = _bcryptjs2.default.genSaltSync(10);
                var hash = _bcryptjs2.default.hashSync(req.body.password, salt);
                var user = {
                    name: req.body.name,
                    email: req.body.email,
                    password: hash,
                    role: 0
                };
                _models2.default.User.create(user).then(function (user) {
                    var token = _jsonwebtoken2.default.sign({
                        id: req.body.id,
                        name: req.body.name,
                        email: req.body.email,
                        role: req.body.role
                    }, process.env.JWT_SECRET, { expiresIn: '24h' });
                    return res.status(201).send({
                        success: 'true',
                        message: 'User created successfully',
                        data: user,
                        token: token
                    });
                });
            });
        }
    }]);

    return UsersController;
}();

var userController = new UsersController();
exports.default = userController;
//# sourceMappingURL=usersController.js.map