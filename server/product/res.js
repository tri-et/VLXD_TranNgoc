import {product} from '../models'
import Sequelize from 'sequelize'
const Op = Sequelize.Op

const resolvers = {
  RootQuery: {
    async listProduct() {
      return await product.all()
    },
  },
  RootMutation: {
    async deleteProduct(_, {input}) {
      return await product.destroy({
        where: {
          id: {
            [Op.in]: input,
          },
        },
      })
    },
    async updateProduct(_, {input}) {
      return await product.upsert(input).then(() => {
        return input
      })
    },
  },
}

export default resolvers
