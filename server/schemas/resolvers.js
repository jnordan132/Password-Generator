const { User, Passwords } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id)
        return user;
      }
    },
    passwords: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Passwords.find(params);
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    addPassword: async (parent, { title, titlespassword }) => {
        return Passwords.create({ title, titlespassword });
    },
    // deletePassword: async (parent, { _id, techNum }) => {
    //     return Passwords.findOneAndUpdate(
    //         { _id: profileId },
    //         { $pull: { skills: skill } },
    //         { new: true }
    //     )
    // },
  },
};

module.exports = resolvers;