"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpResp = exports.RespData = void 0;
var HttpResp = /** @class */ (function () {
    function HttpResp(code, message) {
        if (code === void 0) { code = '00'; }
        if (message === void 0) { message = 'Success'; }
        var _this = this;
        this.data = null;
        this.setCode = function (code) {
            _this.code = code;
        };
        this.setMessage = function (message) {
            _this.message = message;
        };
        this.setData = function (data) {
            _this.data = data;
        };
        this.code = code;
        this.message = message;
    }
    return HttpResp;
}());
exports.HttpResp = HttpResp;
var RespData = /** @class */ (function () {
    function RespData(type) {
        var _this = this;
        this.total = 0;
        this.start = 0;
        this.display = 0;
        this.type = '';
        this.items = null;
        this.setTotal = function (total) {
            _this.total = total;
        };
        this.setStart = function (start) {
            _this.start = start;
        };
        this.setDisplay = function (display) {
            _this.display = display;
        };
        this.setType = function (type) {
            _this.type = type;
        };
        this.setItems = function (items) {
            _this.items = items;
        };
        this.type = type;
    }
    return RespData;
}());
exports.RespData = RespData;
