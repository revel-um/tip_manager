const TipService = require('./service')

class TipController {
    static create = async (req, res, next) => {
        try {
            const tip = await TipService.create(req.body, req.session, req.email);
            res.status(200).json({ tip });
        } catch (error) {
            next(error);
        }
    }

    static get = async (req, res, next) => {
        try {
            const { startDate, endDate } = req.query;
            const tip = await TipService.get(startDate, endDate, req.session, req.email);
            res.status(200).json(tip);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = TipController