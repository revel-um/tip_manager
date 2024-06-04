const User = require('../../db/user')

class UserService {
    static async create(data, session) {
        const {name, email, password, proPic} = data;

        const user = await new User({
            session,
            name: name,
            email: email,
            password: password,
            profilePicture: proPic
        }).save();

        if(!user) throw new Error('No user found')
        return user;
    }

    static async get(data) {
        const {email, password} = data;
        const user = await User.findOne({email, password});
        if (!user) throw new Error('Invalid credentials')
        return user;
    }
}

module.exports = UserService;