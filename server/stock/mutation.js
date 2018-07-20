import { GraphQLInt, GraphQLList } from 'graphql'
import db from '../db'
import Sequelize from 'sequelize'
import { Stock, StockInput } from './type'
const Op = Sequelize.Op

export default {
  deleteStock: {
    type: GraphQLInt,
    args: {
      input: {
        type: new GraphQLList(GraphQLInt),
      },
    },
    resolve(_, { input }) {
      return db.models.stock.destroy({
        where: {
          id: {
            [Op.in]: input,
          },
        },
        individualHooks: true,
      })
    },
  },
  updateStock: {
    type: Stock,
    args: {
      input: {
        type: StockInput,
      },
    },
    resolve(_, { input }) {
      if (input.id == undefined) {
        return db.models.stock.create(input, { individualHooks: true }).then(() => {
          return input
        })
      } else {
        return db.models.stock.update(input, { where: { id: input.id }, individualHooks: true }).then(() => {
          return input
        })
      }

    },
  },
}
