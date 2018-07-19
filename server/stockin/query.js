import { GraphQLList } from 'graphql'
import db from '../db'
import { Stockin } from './type'
import Sequelize from 'sequelize'

const Op = Sequelize.Op
const models = db.models
export default {
  listStockin: {
    description: `List all Stockins ###
    {
      listStockin {
        id
        productId
        supplierId
        price
        quantity
        productName
        supplierName
      }
    }`,
    type: new GraphQLList(Stockin),
    resolve() {
      return db.models.stockin.findAll({
        include: [{
          model: models.product,
          required: true,
          attributes: [["name", "productname"]]
        }, {
          model: models.supplier,
          required: true,
          attributes: [["name", "suppliername"]]
        }]
      })
    },
  },
}
