const Client = `
  type Client {
    id: Int
    code: String
    name: String
    address: String
    phone: Int
  }
  input ClientInput {
    id: Int
    code: String
    name: String
    address: String
    phone: Int
  }
`
export default Client
