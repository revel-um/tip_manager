const { celebrate, Joi, Segments } = require('celebrate');

const createTipsValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        place: Joi.string().required(),
        totalAmount: Joi.number().required(),
        tipPercentage: Joi.number().required()
    })
});


const getTipValidation = celebrate({
    [Segments.QUERY]: Joi.object().keys({
        startDate: Joi.date().required(),
        endDate: Joi.date().required(),
    })
});

module.exports = { createTipsValidation, getTipValidation };
