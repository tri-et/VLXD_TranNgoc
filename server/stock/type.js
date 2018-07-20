import {GraphQLObjectType, GraphQLInputObjectType, GraphQLInt, GraphQLString, GraphQLNonNull} from 'graphql'

export const Stock = new GraphQLObjectType({
  name: 'Stock',
  description: 'Stock Information ...',
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        description: 'auto-gen id from Sequelize.',
        resolve(stock) {
          return stock.id
        },
      },
      productId: {
        type: GraphQLInt,
        description: 'This code should be controlled by user.',
        resolve(stock) {
          return stock.productId
        },
      },
      price: {
        type: GraphQLInt,
        resolve(stock) {
          return stock.price
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
        resolve(stock) {
          return stock.product.get('productname')
        },
      },
    }
  },
})

export const StockInput = new GraphQLInputObjectType({
  name: 'StockInput',
  description: 'This is the Input for Stock type',
  fields: () => ({
    id: {
      // no need for GraphQLNonNull wrap, coz this Input's id is used in upsert later
      type: GraphQLInt,
    },
    productId: {
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
  }),
})
