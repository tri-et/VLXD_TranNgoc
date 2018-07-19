import { GraphQLInt, GraphQLList } from 'graphql'
import db from '../db'
import Sequelize from 'sequelize'
import { Stockin, StockinInput } from './type'
const Op = Sequelize.Op

export default {
  deleteStockin: {
    type: GraphQLInt,
    args: {
      input: {
        type: new GraphQLList(GraphQLInt),
      },
    },
    resolve(_, { input }) {
      return db.models.stockin.destroy({
        where: {
          id: {
            [Op.in]: input,
          },
        },
        individualHooks: true,
      })
    },
  },
  updateStockin: {
    type: Stockin,
    args: {
      input: {
        type: StockinInput,
      },
    },
    resolve(_, { input }) {
      if (input.id == undefined) {
        return db.models.stockin.create(input, { individualHooks: true }).then(() => {
          return input
        })
      } else {
        return db.models.stockin.update(input, { where: { id: input.id }, individualHooks: true }).then(() => {
          return input
        })
      }

    },
  },
}
