import { GraphQLList } from 'graphql'
import db from '../db'
import { Stock } from './type'
import Sequelize from 'sequelize'

const Op = Sequelize.Op
const models = db.models
export default {
  listStock: {
    description: `List all Stockins ###
    {
      listStock {
        id
        productId
        price
        quantity
        productName
      }
    }`,
    type: new GraphQLList(Stock),
    resolve() {
      return db.models.stock.findAll({
        include: [{
          model: models.product,
          required: true,
          attributes: [["name", "productname"]]
        }]
      })
    },
  },
}
