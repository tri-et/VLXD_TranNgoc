import { Stock, Product } from '../../models'
import { _auth } from '../../util'

const resolvers = {
  RootQuery: {
    async listStock(_, __, { authUser }) {
      _auth(authUser)
      return await Stock.findAll({
        include: [{
          model: Product,
          required: true
        }]
      }).then((stock) => {
        return stock.map((listStock) => {
          const productName = listStock.get('Product').get('name')
          return Object.assign(listStock.get(), {
            productName: productName
          });
        })
      })
    },
  },
  RootMutation: {
  },
}

export default resolvers
