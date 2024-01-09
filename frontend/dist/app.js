"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const listview_component_1 = __importDefault(require("./components/listview.component"));
const App = () => {
    return ((0, jsx_runtime_1.jsx)(listview_component_1.default, {}));
};
exports.default = App;
