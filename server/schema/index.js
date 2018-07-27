import { makeExecutableSchema } from 'graphql-tools'
import userDef from './user/def'
import userRes from './user/res'

import productDef from './product/def'
import productRes from './product/res'

import supplierDef from './supplier/def'
import supplierRes from './supplier/res'

import stockInDef from './stockin/def'
import stockInRes from './stockin/res'

import stockDef from './stock/def'
import stockRes from './stock/res'

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
    listStockIn:[StockIn]
    listStock:[Stock]
  }
`

const RootMutation = `
  type RootMutation {
    login(input:LoginInput): String
    deleteUser(input:[Int]): Int
    createUser(input:UserInput): User
    updateUser(input:UserInput): User

    deleteProduct(input:[Int]): Int
    updateProduct(input:ProductInput): Product

    deleteSupplier(input:[Int]): Int
    updateSupplier(input:SupplierInput): Supplier

    deleteStockIn(input:[Int]): Int
    updateStockIn(input:StockinInput): StockIn

  }
`

export default makeExecutableSchema({
  typeDefs: [SchemaDefinition, RootQuery, RootMutation, userDef, productDef, supplierDef, stockInDef, stockDef],
  resolvers: [userRes, productRes, supplierRes, stockInRes, stockRes],
})
