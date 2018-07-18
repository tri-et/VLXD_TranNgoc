import db from '../db'

const resolvers = {
  RootQuery: {
    async getUser(_, args, {user}) {
      if (!user) {
        throw new Error('You are not authorized!')
      }

      return await db.models.user.findById(user.id)
    },
    async listUser() {
      return await db.models.user.findAll()
    },
  },
}

export default resolvers
