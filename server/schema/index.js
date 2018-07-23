import {makeExecutableSchema} from 'graphql-tools'
import userDef from './user/def'
import userRes from './user/res'

import productDef from './product/def'
import productRes from './product/res'

import supplierDef from './supplier/def'
import supplierRes from './supplier/res'

const SchemaDefinition = `
  schema {
    query: RootQuery,
    mutation: RootMutation
  }
`

const RootQuery = `
  type RootQuery {
    getUser: User
    listUser: [User]
    
    listProduct: [Product]
    listSupplier: [Supplier]
  }
`

const RootMutation = `
  type RootMutation {
    deleteProduct(input:[Int]): Int
    updateProduct(input:ProductInput): Product

    deleteSupplier(input:[Int]): Int
    updateSupplier(input:SupplierInput): Supplier
  }
`

export default makeExecutableSchema({
  typeDefs: [SchemaDefinition, RootQuery, RootMutation, userDef, productDef, supplierDef],
  resolvers: [userRes, productRes, supplierRes],
})
