"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var naverapi_controller_1 = __importDefault(require("./naverapi/naverapi.controller"));
var app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.get('/', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../public/index.html'));
});
app.use('/search', naverapi_controller_1.default);
app.listen('8001', function () {
    console.log('Server started');
});
