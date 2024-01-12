"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const moment_1 = __importDefault(require("moment"));
const NewsRow = ({ title, pubDate, description }) => {
    return ((0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("div", { className: "title", children: (0, jsx_runtime_1.jsx)("a", { href: "#", dangerouslySetInnerHTML: { __html: title } }) }), (0, jsx_runtime_1.jsxs)("div", { className: "cont", children: [(0, jsx_runtime_1.jsx)("span", { className: "date", children: (0, moment_1.default)(pubDate).format('YYYY.MM.DD HH:mm') }), (0, jsx_runtime_1.jsx)("span", { dangerouslySetInnerHTML: { __html: description } })] })] }));
};
exports.default = NewsRow;
