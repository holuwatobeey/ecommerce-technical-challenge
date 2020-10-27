import models from '../models';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
class UsersController {
    signIn(req, res) {
        const emailValidate = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!req.body.email) {
            return res.status(400).send({
                success: 'false',
                message: 'Email is required',
            });
        }
        if (!(req.body.email.match(emailValidate))) {
            return res.status(400).send({
                success: 'false',
                message: 'Please enter a valid email address',
            });
        }
        if (!req.body.password) {
            return res.status(400).send({
                success: 'false',
                message: 'Password is required',
            });
        }
        models.User.findOne({ where: { email: req.body.email } }).then((user) => {
            if (!user) {
                return res.status(404).send('No user found.');
            }
            const passwordValid = bcrypt.compareSync(req.body.password, user.password);
            if (!passwordValid) {
                return res.status(401).send({
                    success: false,
                    message: 'Password is incorrect',
                    token: null
                });
            }
            const token = jwt.sign({
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
            }, process.env.JWT_SECRET, { expiresIn: '24h' });
            return res.status(201).send({
                success: 'true',
                message: 'User logged in successfully',
                name: user.name,
                email: user.email,
                token
            });
        }
        );

    }
    signUp(req, res) {
        const emailValidate = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!req.body.name) {
            return res.status(400).send({
                success: 'false',
                message: 'Name is required',
            });
        }
        if (!req.body.email) {
            return res.status(400).send({
                success: 'false',
                message: 'Email is required',
            });
        }
        if (!((req.body.email).match(emailValidate))) {
            return res.status(400).send({
                success: 'false',
                message: 'Please enter a valid email address',
            });
        }
        if (!req.body.password) {
            return res.status(400).send({
                success: 'false',
                message: 'Password is required',
            });
        }
        models.User.findOne({
            where: { email: req.body.email }
        })
            .then((userFound) => {
                if (userFound) {
                    return res.status(403).send({
                        success: 'false',
                        message: 'A user with that email exists already',
                    });
                }

                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(req.body.password, salt);
                const user = {
                    name: req.body.name,
                    email: req.body.email,
                    password: hash,
                    role: 1,
                };
                models.User.create(user).then((user) => {
                    var token = jwt.sign({
                        id: req.body.id,
                        name: req.body.name,
                        email: req.body.email,
                        role: req.body.role,
                    }, process.env.JWT_SECRET, { expiresIn: '24h' });
                    return res.status(201).send({
                        success: 'true',
                        message: 'User created successfully',
                        data: user,
                        token
                    });
                });
            });
    }

}
const userController = new UsersController();
export default userController;