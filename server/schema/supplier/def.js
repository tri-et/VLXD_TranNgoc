const Supplier = `
  type Supplier {
    id: Int
    taxCode: String
    name: String
    address: String
    phone: String
  }
  input SupplierInput {
    id: Int
    taxCode: String
    name: String!
    address: String
    phone: String
  }
`
export default Supplier
