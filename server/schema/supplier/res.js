import {Supplier} from '../../models'
import {_auth} from '../../util'

const resolvers = {
  RootQuery: {
    async listSupplier(_, __, {authUser}) {
      _auth(authUser)
      return await Supplier.all()
    },
  },
  RootMutation: {
    async deleteSupplier(_, {input}, {authUser}) {
      _auth(authUser)
      return await Supplier.destroy({
        where: {
          id: {
            $in: input,
          },
        },
      })
    },
    async updateSupplier(_, {input}, {authUser}) {
      _auth(authUser)
      return await Supplier.upsert(input).then(() => {
        return input
      })
    },
  },
}

export default resolvers
