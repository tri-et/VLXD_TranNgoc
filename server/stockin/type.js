import {GraphQLObjectType, GraphQLInputObjectType, GraphQLInt, GraphQLString, GraphQLNonNull} from 'graphql'

export const Stockin = new GraphQLObjectType({
  name: 'Stockin',
  description: 'Stockin Information ...',
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        description: 'auto-gen id from Sequelize.',
        resolve(stockin) {
          return stockin.id
        },
      },
      productId: {
        type: GraphQLInt,
        description: 'This code should be controlled by user.',
        resolve(stockin) {
          return stockin.productId
        },
      },
      supplierId: {
        type: GraphQLInt,
        resolve(stockin) {
          return stockin.supplierId
        },
      },
      price: {
        type: GraphQLInt,
        resolve(stockin) {
          return stockin.price
        },
      },
      quantity: {
        type: GraphQLInt,
        resolve(stockin) {
          return stockin.quantity
        },
      },
      productName: {
        type: GraphQLString,
        resolve(stockin) {
          return stockin.product.get('productname')
        },
      },
      supplierName: {
        type: GraphQLString,
        resolve(stockin) {
          return stockin.supplier.get('suppliername')
        },
      },
    }
  },
})

export const StockinInput = new GraphQLInputObjectType({
  name: 'StockinInput',
  description: 'This is the Input for Supplier type',
  fields: () => ({
    id: {
      // no need for GraphQLNonNull wrap, coz this Input's id is used in upsert later
      type: GraphQLInt,
    },
    productId: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    supplierId: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    price: {
      type: GraphQLInt,
    },
    quantity: {
      type: GraphQLInt,
    },
    productName: {
      type: GraphQLString,
    },
    supplierName: {
      type: GraphQLString,
    },
  }),
})
