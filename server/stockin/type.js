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
        type: GraphQLString,
        description: 'This code should be controlled by user.',
        resolve(stockin) {
          return stockin.productId
        },
      },
      supplierId: {
        type: GraphQLString,
        resolve(stockin) {
          return stockin.supplierId
        },
      },
      price: {
        type: GraphQLString,
        resolve(stockin) {
          return stockin.price
        },
      },
      quantity: {
        type: GraphQLString,
        resolve(stockin) {
          return stockin.quantity
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
      type: GraphQLString,
    },
    quantity: {
      type: GraphQLInt,
    },
  }),
})
