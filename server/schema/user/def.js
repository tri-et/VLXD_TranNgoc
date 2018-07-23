const User = `
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
  scalar Date
`
export default User
