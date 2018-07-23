import {Product} from '../../models'

const resolvers = {
  RootQuery: {
    async listProduct() {
      return await Product.all()
    },
  },
  RootMutation: {
    async deleteProduct(_, {input}) {
      return await Product.destroy({
        where: {
          id: {
            $in: input,
          },
        },
      })
    },
    async updateProduct(_, {input}) {
      return await Product.upsert(input).then(() => {
        return input
      })
    },
  },
}

export default resolvers
