import {Supplier} from '../models'
import Sequelize from 'sequelize'
const Op = Sequelize.Op

const resolvers = {
  RootQuery: {
    async listSupplier() {
      return await Supplier.all()
    },
  },
  RootMutation: {
    async deleteSupplier(_, {input}) {
      return await Supplier.destroy({
        where: {
          id: {
            [Op.in]: input,
          },
        },
      })
    },
    async updateSupplier(_, {input}) {
      return await Supplier.upsert(input).then(() => {
        return input
      })
    },
  },
}

export default resolvers
