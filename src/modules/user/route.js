const UserController = require("./controller");
const UserValidations = require("./validator")

function userRoutes(router) {
    router.post(`/user`, UserValidations.createUserValidation, UserController.create);
    router.post('/user/login', UserValidations.loginValidation, UserController.login);
}

module.exports = userRoutes;