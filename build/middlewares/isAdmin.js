'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, res, next) {
    var token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({
            message: 'Access denied, no token provided'
        });
    }

    try {
        var decoded = _jsonwebtoken2.default.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        if (decoded.role != 0) {
            res.status(403).json({
                message: 'Unauthorized'
            });
        }
        next();
    } catch (exception) {
        res.status(400).json({
            message: 'Invalid token'
        });
    }
};
//# sourceMappingURL=isAdmin.js.map