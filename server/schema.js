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
    }
  },
})

import {makeExecutableSchema} from 'graphql-tools'
import userDef from './user/def'
import userRes from './user/res'

import user1Def from './user1/def'
import user1Res from './user1/res'

import productDef from './product/def'
import productRes from './product/res'

const RootQuery = `
  type RootQuery {
    getUser: User
    listUser: [User]

    getUser1: User1
    listUser1: [User1]

    listProduct: [Product]
  }
`
const SchemaDefinition = `
  schema {
    query: RootQuery
  }
`
export default makeExecutableSchema({
  typeDefs: [SchemaDefinition, RootQuery, userDef, user1Def, productDef],
  resolvers: [userRes, user1Res, productRes],
})

// const SCHEMA = new GraphQLSchema({
//   query,
//   mutation,
// })
