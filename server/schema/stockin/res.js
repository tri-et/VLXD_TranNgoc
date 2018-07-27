import { StockIn, Product, Supplier } from '../../models'
import { _auth } from '../../util'

const resolvers = {
  RootQuery: {
    async listStockIn(_, __, { authUser }) {
      _auth(authUser)
      return await StockIn.findAll({
        include: [{
          model: Product,
          required: true
        }, {
          model: Supplier,
          required: true
        }]
      }).then((stockin) => {
        return stockin.map((listStockIn) => {
          const productName = listStockIn.get('Product').get('name')
          const supplierName = listStockIn.get('Supplier').get('name')
          return Object.assign(listStockIn.get(), {
            productName: productName,
            supplierName: supplierName
          });
        })
      })
    },
  },
  RootMutation: {
    async deleteStockIn(_, { input }, { authUser }) {
      _auth(authUser)
      return await StockIn.destroy({
        where: {
          id: {
            $in: input,
          },
        },
      })
    },
    async updateStockIn(_, { input }, { authUser }) {
      _auth(authUser)
      return await StockIn.upsert(input).then(() => {
        return input
      })
    },
  },
}

export default resolvers
