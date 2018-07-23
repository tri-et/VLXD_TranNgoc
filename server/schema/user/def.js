const User = `
  scalar Date
  type User {
    id: Int
    username: String
    password: String
    roles: String
    createdAt: Date
  }
  input UserInput {
    id: Int
    username: String!
    password: String
    roles: String!
  }
  input LoginInput {
    username: String!
    password: String!
  }
`
export default User
