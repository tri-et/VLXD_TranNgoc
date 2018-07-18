// eslint-disable-next-line no-unused-vars
import {GraphQLSchema, GraphQLObjectType} from 'graphql'
import qryProduct from './product/query'
import mutProduct from './product/mutation'

import qrySupplier from './supplier/query'
import mutSupplier from './supplier/mutation'

// eslint-disable-next-line no-unused-vars
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

// eslint-disable-next-line no-unused-vars
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

import {makeExecutableSchema} from 'graphql-tools'
import defUser from './user/def'
import resUser from './user/res'

import defUser1 from './user1/def'
import resUser1 from './user1/res'

const RootQuery = `
  type RootQuery {
    getUser: User
    listUser: [User]

    getUser1: User1
    listUser1: [User1]
  }
`
const SchemaDefinition = `
  schema {
    query: RootQuery
  }
`
export default makeExecutableSchema({
  typeDefs: [SchemaDefinition, RootQuery, defUser, defUser1],
  resolvers: [resUser, resUser1],
})

// const SCHEMA = new GraphQLSchema({
//   query,
//   mutation,
// })
