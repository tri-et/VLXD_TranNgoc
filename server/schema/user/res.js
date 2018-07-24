import {User} from '../../models'
import GraphQLDate from 'graphql-date'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const resolvers = {
  Date: GraphQLDate,
  RootQuery: {
    async listUser(_, __, {authUser}) {
      if (!authUser) {
        throw new Error('You are not authenticated!')
      }
      return await User.all()
    },
  },
  RootMutation: {
    async login(_, {input}) {
      const user = await User.findOne({where: {username: input.username}})
      if (!user) {
        throw new Error('Không tìm thấy tài khoản này!')
      }
      const valid = await bcrypt.compare(input.password, user.password)
      if (!valid) {
        throw new Error('Sai Mật Khẩu rồi ...')
      }
      return jwt.sign(
        {
          username: user.username,
          roles: user.roles,
        },
        process.env.JWT_SECRET,
        {expiresIn: '1y'}
      )
    },
    async createUser(_, {input}) {
      return await User.create({
        username: input.username,
        password: await bcrypt.hash(input.password, 10),
        roles: input.roles,
      }).then(() => {
        return input
      })
    },
    async updateUser(_, {input}) {
      const user = await User.findById(input.id)
      await user.update(input)
      return user
    },
    async deleteUser(_, {input}) {
      return await User.destroy({
        where: {
          id: {
            $in: input,
          },
        },
      })
    },
  },
}

export default resolvers
