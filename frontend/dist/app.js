"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const listview_component_1 = __importDefault(require("./components/common/news/listview.component"));
const MenuLayout_1 = __importDefault(require("./components/common/MenuLayout"));
const AboutMe_1 = __importDefault(require("./AboutMe"));
const test_1 = __importDefault(require("./pages/test"));
const react_router_dom_1 = require("react-router-dom");
const App = () => {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.BrowserRouter, { children: [(0, jsx_runtime_1.jsx)(MenuLayout_1.default, { children: undefined }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/', element: (0, jsx_runtime_1.jsx)(AboutMe_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/list', element: (0, jsx_runtime_1.jsx)(listview_component_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/test', element: (0, jsx_runtime_1.jsx)(test_1.default, {}) })] })] }) }));
};
exports.default = App;
