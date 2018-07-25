"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Supplier = "\n  type Supplier {\n    id: Int\n    taxCode: String\n    name: String\n    address: String\n    phone: String\n  }\n  input SupplierInput {\n    id: Int\n    taxCode: String\n    name: String!\n    address: String\n    phone: String\n  }\n";
exports.default = Supplier;