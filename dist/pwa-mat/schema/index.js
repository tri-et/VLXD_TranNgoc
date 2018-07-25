'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphqlTools = require('graphql-tools');

var _def = require('./user/def');

var _def2 = _interopRequireDefault(_def);

var _res = require('./user/res');

var _res2 = _interopRequireDefault(_res);

var _def3 = require('./product/def');

var _def4 = _interopRequireDefault(_def3);

var _res3 = require('./product/res');

var _res4 = _interopRequireDefault(_res3);

var _def5 = require('./supplier/def');

var _def6 = _interopRequireDefault(_def5);

var _res5 = require('./supplier/res');

var _res6 = _interopRequireDefault(_res5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SchemaDefinition = '\n  schema {\n    query: RootQuery,\n    mutation: RootMutation\n  }\n';

var RootQuery = '\n  type RootQuery {\n    getUser: User\n    listUser: [User]\n    \n    listProduct: [Product]\n    listSupplier: [Supplier]\n  }\n';

var RootMutation = '\n  type RootMutation {\n    login(input:LoginInput): String\n    deleteUser(input:[Int]): Int\n    createUser(input:UserInput): User\n    updateUser(input:UserInput): User\n\n    deleteProduct(input:[Int]): Int\n    updateProduct(input:ProductInput): Product\n\n    deleteSupplier(input:[Int]): Int\n    updateSupplier(input:SupplierInput): Supplier\n\n  }\n';

exports.default = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: [SchemaDefinition, RootQuery, RootMutation, _def2.default, _def4.default, _def6.default],
  resolvers: [_res2.default, _res4.default, _res6.default]
});