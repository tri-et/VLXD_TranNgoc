import { GraphQLSchema, GraphQLObjectType } from 'graphql'
import qryProduct from './product/query'
import mutProduct from './product/mutation'

import qrySupplier from './supplier/query'
import mutSupplier from './supplier/mutation'

import qryStockin from './stockin/query'
import mutStockin from './stockin/mutation'

import qryStock from './stock/query'
import mutStock from './stock/mutation'

const query = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'This is the ROOT Query',
  fields: () => {
    return {
      ...qryProduct,
      ...qrySupplier,
      ...qryStockin,
      ...qryStock,
    }
  },
})

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'This is for create/update/delete operation',
  fields() {
    return {
      ...mutProduct,
      ...mutSupplier,
      ...mutStockin,
      ...mutStock,
    }
  },
})

const SCHEMA = new GraphQLSchema({
  query,
  mutation,
})

export default SCHEMA
