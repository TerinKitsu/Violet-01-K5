(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Day6/ScriptD6/ScriptD6_B1.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'f0015+fmTtJRq3VUTy95e3o', 'ScriptD6_B1', __filename);
// Day6/ScriptD6/ScriptD6_B1.js

"use strict";

var getServerTimeAsync = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var response, serverDate;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return fetch(window.location.href, {
                            method: 'HEAD'
                        });

                    case 3:
                        response = _context.sent;
                        serverDate = response.headers.get("Date");

                        if (serverDate) {
                            _context.next = 7;
                            break;
                        }

                        throw new Error("No Date header received");

                    case 7:
                        return _context.abrupt("return", new Date(serverDate).getTime());

                    case 10:
                        _context.prev = 10;
                        _context.t0 = _context["catch"](0);

                        console.error("Failed to get server time:", _context.t0);
                        return _context.abrupt("return", null);

                    case 14:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this, [[0, 10]]);
    }));

    return function getServerTimeAsync() {
        return _ref.apply(this, arguments);
    };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.updateServerTime();
    },
    updateServerTime: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var timestamp, date, formattedTime;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return getServerTimeAsync();

                        case 2:
                            timestamp = _context2.sent;

                            if (timestamp !== null) {
                                date = new Date(timestamp);
                                formattedTime = date.toLocaleString(); // hoặc toISOString()

                                this.serverTimeLabel.string = "🕒 Server Time: " + formattedTime;
                            } else {
                                this.serverTimeLabel.string = "❌ Failed to get server time";
                            }

                        case 4:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function updateServerTime() {
            return _ref2.apply(this, arguments);
        }

        return updateServerTime;
    }()
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=ScriptD6_B1.js.map
        