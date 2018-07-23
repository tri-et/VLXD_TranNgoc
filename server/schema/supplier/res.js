import {Supplier} from '../../models'

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
            $in: input,
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
