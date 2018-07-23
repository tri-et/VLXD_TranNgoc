import {User} from '../../models'
import GraphQLDate from 'graphql-date'
import bcrypt from 'bcrypt'

const resolvers = {
  Date: GraphQLDate,
  RootQuery: {
    async listUser() {
      return await User.findAll()
    },
  },
  RootMutation: {
    async createUser(_, {input}) {
      return await User.create({
        username: input.username,
        password: await bcrypt.hash(input.password, 10),
        roles: input.roles,
      }).then(() => {
        return input
      })
    },

    async updateUser(_, {input}) {
      const user = await User.findById(input.id)
      await user.update(input)
      return user
    },
  },
}

export default resolvers
