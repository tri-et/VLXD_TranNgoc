const {product} = require('../models')
const resolvers = {
  RootQuery: {
    async listProduct() {
      return await product.all()
    },
  },
}

export default resolvers
