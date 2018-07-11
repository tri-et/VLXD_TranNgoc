import {GraphQLList} from 'graphql'
import db from '../db'
import {Supplier} from './type'

export default {
  listSupplier: {
    description: `List all Suppliers ###
    {
      listSupplier {
        id
        name
        taxcode
        address
        phone
      }
    }`,
    type: new GraphQLList(Supplier),
    resolve() {
      return db.models.supplier.findAll()
    },
  },
}
