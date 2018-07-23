const Product = `
  type Product {
    id: Int
    code: String
    name: String
    unit: String
    listingPrice: Int
  }
  input ProductInput {
    id: Int
    code: String!
    name: String!
    unit: String
    listingPrice: Int
  }
`
export default Product
