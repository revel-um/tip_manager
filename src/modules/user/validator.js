const { celebrate, Joi, Segments } = require('celebrate');

const createUserValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        password: Joi.string().required(),
        email: Joi.string().required().email(),
        proPic: Joi.string().required()
    })
});


const loginValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        password: Joi.string().required(),
        email: Joi.string().required().email(),
    })
});

module.exports = { createUserValidation, loginValidation };
