import {Client} from '../../models'
import {_auth} from '../../util'

const resolvers = {
  RootQuery: {
    async listClient(_, __, {authUser}) {
      _auth(authUser)
      return await Client.all()
    },
  },
  RootMutation: {
    async deleteClient(_, {input}, {authUser}) {
      _auth(authUser)
      return await Client.destroy({
        where: {
          id: {
            $in: input,
          },
        },
      })
    },
    async updateClient(_, {input}, {authUser}) {
      _auth(authUser)
      return await Client.upsert(input).then(() => {
        return input
      })
    },
  },
}

export default resolvers
