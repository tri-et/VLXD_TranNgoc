const StockIn = `
  type StockIn {
    id: Int
    productId: Int
    supplierId: Int
    price: Int
    quantity: Int
    productName:String
    supplierName:String
  }
  input StockinInput {
    id: Int
    productId: Int
    supplierId: Int
    price: Int
    quantity: Int
    productName:String
    supplierName:String
  }
`
export default StockIn