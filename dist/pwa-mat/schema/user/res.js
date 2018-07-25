'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _models = require('../../models');

var _graphqlDate = require('graphql-date');

var _graphqlDate2 = _interopRequireDefault(_graphqlDate);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _util = require('../../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var resolvers = {
  Date: _graphqlDate2.default,
  RootQuery: {
    listUser: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_, __, _ref) {
        var authUser = _ref.authUser;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                (0, _util._auth)(authUser);
                _context.next = 3;
                return _models.User.all();

              case 3:
                return _context.abrupt('return', _context.sent);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function listUser(_x, _x2, _x3) {
        return _ref2.apply(this, arguments);
      }

      return listUser;
    }()
  },
  RootMutation: {
    login: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_, _ref3) {
        var input = _ref3.input;
        var user, valid;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _models.User.findOne({ where: { username: input.username } });

              case 2:
                user = _context2.sent;

                if (user) {
                  _context2.next = 5;
                  break;
                }

                throw new Error('Không tìm thấy tài khoản này!');

              case 5:
                _context2.next = 7;
                return _bcrypt2.default.compare(input.password, user.password);

              case 7:
                valid = _context2.sent;

                if (valid) {
                  _context2.next = 10;
                  break;
                }

                throw new Error('Sai Mật Khẩu rồi ...');

              case 10:
                return _context2.abrupt('return', _jsonwebtoken2.default.sign({
                  username: user.username,
                  roles: user.roles
                }, process.env.JWT_SECRET, { expiresIn: '1y' }));

              case 11:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function login(_x4, _x5) {
        return _ref4.apply(this, arguments);
      }

      return login;
    }(),
    createUser: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_, _ref5, _ref6) {
        var input = _ref5.input;
        var authUser = _ref6.authUser;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                (0, _util._auth)(authUser);
                _context3.t0 = _models.User;
                _context3.t1 = input.username;
                _context3.next = 5;
                return _bcrypt2.default.hash(input.password, 10);

              case 5:
                _context3.t2 = _context3.sent;
                _context3.t3 = input.roles;
                _context3.t4 = {
                  username: _context3.t1,
                  password: _context3.t2,
                  roles: _context3.t3
                };

                _context3.t5 = function () {
                  return input;
                };

                _context3.next = 11;
                return _context3.t0.create.call(_context3.t0, _context3.t4).then(_context3.t5);

              case 11:
                return _context3.abrupt('return', _context3.sent);

              case 12:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function createUser(_x6, _x7, _x8) {
        return _ref7.apply(this, arguments);
      }

      return createUser;
    }(),
    updateUser: function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_, _ref8, _ref9) {
        var input = _ref8.input;
        var authUser = _ref9.authUser;
        var user;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                (0, _util._auth)(authUser);
                _context4.next = 3;
                return _models.User.findById(input.id);

              case 3:
                user = _context4.sent;
                _context4.next = 6;
                return user.update(input);

              case 6:
                return _context4.abrupt('return', user);

              case 7:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function updateUser(_x9, _x10, _x11) {
        return _ref10.apply(this, arguments);
      }

      return updateUser;
    }(),
    deleteUser: function () {
      var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(_, _ref11, _ref12) {
        var input = _ref11.input;
        var authUser = _ref12.authUser;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                (0, _util._auth)(authUser);
                _context5.next = 3;
                return _models.User.destroy({
                  where: {
                    id: {
                      $in: input
                    }
                  }
                });

              case 3:
                return _context5.abrupt('return', _context5.sent);

              case 4:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function deleteUser(_x12, _x13, _x14) {
        return _ref13.apply(this, arguments);
      }

      return deleteUser;
    }()
  }
};

exports.default = resolvers;