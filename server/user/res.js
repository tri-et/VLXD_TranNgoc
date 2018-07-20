import {user} from '../models'

const resolvers = {
  RootQuery: {
    async listUser() {
      return await user.findAll()
    },
  },
}

export default resolvers
