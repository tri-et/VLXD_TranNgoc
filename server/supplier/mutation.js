import {GraphQLInt, GraphQLList} from 'graphql'
import db from '../db'
import Sequelize from 'sequelize'
import {Supplier, SupplierInput} from './type'
const Op = Sequelize.Op

export default {
  deleteSupplier: {
    type: GraphQLInt,
    args: {
      input: {
        type: new GraphQLList(GraphQLInt),
      },
    },
    resolve(_, {input}) {
      return db.models.supplier.destroy({
        where: {
          id: {
            [Op.in]: input,
          },
        },
      })
    },
  },
  updateSupplier: {
    type: Supplier,
    args: {
      input: {
        type: SupplierInput,
      },
    },
    resolve(_, {input}) {
      return db.models.supplier.upsert(input).then(() => {
        return input
      })
    },
  },
}
