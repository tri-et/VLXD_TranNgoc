import {GraphQLList} from 'graphql'
import db from '../db'
import {Stockin} from './type'
import Sequelize from 'sequelize'

const Op = Sequelize.Op
const product=db.models.product
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
      }
    }`,
    type: new GraphQLList(Stockin),
    resolve() {
      return db.models.stockin.findAll()
    },
  },
}
