import {GraphQLObjectType, GraphQLInputObjectType, GraphQLInt, GraphQLString, GraphQLNonNull} from 'graphql'

export const Supplier = new GraphQLObjectType({
  name: 'Supplier',
  description: 'Supplier Information ...',
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        description: 'auto-gen id from Sequelize.',
        resolve(supplier) {
          return supplier.id
        },
      },
      taxcode: {
        type: GraphQLString,
        description: 'This code should be controlled by user.',
        resolve(supplier) {
          return supplier.taxcode
        },
      },
      name: {
        type: GraphQLString,
        resolve(supplier) {
          return supplier.name
        },
      },
      address: {
        type: GraphQLString,
        resolve(supplier) {
          return supplier.address
        },
      },
      phone: {
        type: GraphQLString,
        resolve(supplier) {
          return supplier.phone
        },
      },
    }
  },
})

export const SupplierInput = new GraphQLInputObjectType({
  name: 'SupplierInput',
  description: 'This is the Input for Supplier type',
  fields: () => ({
    id: {
      // no need for GraphQLNonNull wrap, coz this Input's id is used in upsert later
      type: GraphQLInt,
    },
    taxcode: {
      type: new GraphQLNonNull(GraphQLString),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    address: {
      type: GraphQLString,
    },
    phone: {
      type: GraphQLString,
    },
  }),
})
