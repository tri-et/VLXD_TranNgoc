'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _models = require('../../models');

var _util = require('../../util');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var resolvers = {
  RootQuery: {
    listProduct: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_, __, _ref) {
        var authUser = _ref.authUser;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                (0, _util._auth)(authUser);
                _context.next = 3;
                return _models.Product.all();

              case 3:
                return _context.abrupt('return', _context.sent);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function listProduct(_x, _x2, _x3) {
        return _ref2.apply(this, arguments);
      }

      return listProduct;
    }()
  },
  RootMutation: {
    deleteProduct: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_, _ref3, _ref4) {
        var input = _ref3.input;
        var authUser = _ref4.authUser;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                (0, _util._auth)(authUser);
                _context2.next = 3;
                return _models.Product.destroy({
                  where: {
                    id: {
                      $in: input
                    }
                  }
                });

              case 3:
                return _context2.abrupt('return', _context2.sent);

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function deleteProduct(_x4, _x5, _x6) {
        return _ref5.apply(this, arguments);
      }

      return deleteProduct;
    }(),
    updateProduct: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_, _ref6, _ref7) {
        var input = _ref6.input;
        var authUser = _ref7.authUser;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                (0, _util._auth)(authUser);
                _context3.next = 3;
                return _models.Product.upsert(input).then(function () {
                  return input;
                });

              case 3:
                return _context3.abrupt('return', _context3.sent);

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function updateProduct(_x7, _x8, _x9) {
        return _ref8.apply(this, arguments);
      }

      return updateProduct;
    }()
  }
};

exports.default = resolvers;