import {Product} from '../../models'
import {_auth} from '../../util'

const resolvers = {
  RootQuery: {
    async listProduct(_, __, {authUser}) {
      _auth(authUser)
      return await Product.all()
    },
  },
  RootMutation: {
    async deleteProduct(_, {input}, {authUser}) {
      _auth(authUser)
      return await Product.destroy({
        where: {
          id: {
            $in: input,
          },
        },
      })
    },
    async updateProduct(_, {input}, {authUser}) {
      _auth(authUser)
      return await Product.upsert(input).then(() => {
        return input
      })
    },
  },
}

export default resolvers
