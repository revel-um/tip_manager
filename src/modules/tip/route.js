const TipController = require("./controller");
const TipValidations = require("./validator")
const verifyAccessToken = require('../../middlewares/verify')

function tipRoutes(router) {
    router.post(`/tip/calculate`, verifyAccessToken, TipValidations.createTipsValidation, TipController.create);
    router.get('/tip', verifyAccessToken, TipValidations.getTipValidation, TipController.get);
}

module.exports = tipRoutes;