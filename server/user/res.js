import {User} from '../models'

const resolvers = {
  RootQuery: {
    async listUser() {
      return await User.findAll()
    },
  },
}

export default resolvers
