"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Product = "\n  type Product {\n    id: Int\n    code: String\n    name: String\n    unit: String\n    listingPrice: Int\n  }\n  input ProductInput {\n    id: Int\n    code: String!\n    name: String!\n    unit: String\n    listingPrice: Int\n  }\n";
exports.default = Product;