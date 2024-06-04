const generateAccessToken = require("../../helpers/auth")
const UserService = require('./service')
const uuid = require('uuid')

class UserController {
    static create = async (req, res, next) => {
        try {
            const session = uuid.v4();
            const user = await UserService.create(req.body, session);            
            const token = generateAccessToken(req.body.email,  session)

            res.status(200).json({name: user.name, token});
        } catch (error) {
            next(error);
        }
    }

    static login = async (req, res, next) => {
        try {
            const session = uuid.v4();
            const user = await UserService.get(req.body);
            user.session = session;
            await user.save()
            const token = generateAccessToken(req.body.email, session);

            res.status(200).json({name: user.name, token});
        } catch (error) {
            next(error)
        }
    }
}

module.exports = UserController