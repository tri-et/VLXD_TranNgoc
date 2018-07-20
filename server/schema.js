// eslint-disable-next-line no-unused-vars
// import {GraphQLSchema, GraphQLObjectType} from 'graphql'
// import qryProduct from './product/query'
// import mutProduct from './product/mutation'

// import qrySupplier from './supplier/query'
// import mutSupplier from './supplier/mutation'

// eslint-disable-next-line no-unused-vars
// const query = new GraphQLObjectType({
//   name: 'RootQuery',
//   description: 'This is the ROOT Query',
//   fields: () => {
//     return {
//       ...qryProduct,
//       ...qrySupplier,
//     }
//   },
// })

// eslint-disable-next-line no-unused-vars
// const mutation = new GraphQLObjectType({
//   name: 'Mutation',
//   description: 'This is for create/update/delete operation',
//   fields() {
//     return {
//       ...mutProduct,
//       ...mutSupplier,
//     }
//   },
// })

import {makeExecutableSchema} from 'graphql-tools'
import userDef from './user/def'
import userRes from './user/res'

import productDef from './product/def'
import productRes from './product/res'

const RootQuery = `
  type RootQuery {
    getUser: User
    listUser: [User]
    
    listProduct: [Product]
  }
`

const RootMutation = `
  type RootMutation {
    deleteProduct(input:[Int]): Int
    updateProduct(input:ProductInput): Product
  }
`

const SchemaDefinition = `
  schema {
    query: RootQuery,
    mutation: RootMutation
  }
`
export default makeExecutableSchema({
  typeDefs: [SchemaDefinition, RootQuery, RootMutation, userDef, productDef],
  resolvers: [userRes, productRes],
})

// const SCHEMA = new GraphQLSchema({
//   query,
//   mutation,
// })
