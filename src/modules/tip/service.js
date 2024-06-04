const Tip = require('../../db/tip')
const User = require('../../db/user')

class TipService {
    static async create(data, session, email) {
        if(session && email) {
            const user = await User.findOne({email, session})
            if(!user) throw new Error('Invalid session');
        }
        const { place, totalAmount, tipPercentage } = data;
        const tipAmount = totalAmount * (tipPercentage / 100);

        const tip = await new Tip({
            place,
            totalAmount,
            tipAmount
        }).save();

        if (!tip) throw new Error('No tip found')
        return tipAmount;
    }

    static async get(startDate, endDate, session, email) {
        if(session && email) {
            const user = await User.findOne({email, session})
            if(!user) throw new Error('Invalid session');
        }
        const tips = await Tip.find({
            createdAt: {
                $gte: new Date(startDate),
                $lte: new Date(endDate)
            }
        });
        if (!tips) throw new Error('No data')
        return tips;
    }
}

module.exports = TipService;