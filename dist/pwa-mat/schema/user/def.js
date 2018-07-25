"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var User = "\n  scalar Date\n  type User {\n    id: Int\n    username: String\n    password: String\n    roles: String\n    createdAt: Date\n  }\n  input UserInput {\n    id: Int\n    username: String!\n    password: String\n    roles: String!\n  }\n  input LoginInput {\n    username: String!\n    password: String!\n  }\n";
exports.default = User;