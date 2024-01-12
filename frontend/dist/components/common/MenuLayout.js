"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const menuItems = [
    { id: 1, label: 'Home', link: '/' },
    { id: 2, label: 'About', link: '/about' },
    { id: 3, label: 'Contact', link: '/list' },
];
const MenuLayout = ({ children }) => {
    const [selectedMenuItem, setSelectedMenuItem] = (0, react_1.useState)(null);
    const handleMenuItemClick = (id) => {
        setSelectedMenuItem(id);
        // 여기에서 해당 메뉴에 대한 추가 로직을 수행할 수 있습니다.
    };
    const menuLayoutCss = {
        display: 'flex',
        justifyContent: 'space-between', // 메뉴를 오른쪽으로 정렬
        padding: '10px',
        backgroundColor: '#ABABAB',
        color: '#fff',
    };
    const menuCss = {
        display: 'flex',
        listStyle: 'none',
        margin: '3px',
        padding: '3px',
    };
    const menuItemCss = {
        margin: '0 10px',
        cursor: 'pointer',
        padding: '5px',
        borderBottom: selectedMenuItem ? '2px solid #fff' : 'none',
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "menu-layout", style: menuLayoutCss, children: [(0, jsx_runtime_1.jsx)("div", { children: "Logo \uB610\uB294 \uC81C\uBAA9" }), (0, jsx_runtime_1.jsx)("nav", { className: "menu", children: (0, jsx_runtime_1.jsxs)("ul", { style: menuCss, children: [(0, jsx_runtime_1.jsx)("li", { style: menuCss, children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: '/', children: "Home" }) }), (0, jsx_runtime_1.jsx)("li", { style: menuCss, children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: '/about', children: "About Me" }) }), (0, jsx_runtime_1.jsx)("li", { style: menuCss, children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: '/list', children: "List" }) }), (0, jsx_runtime_1.jsx)("li", { style: menuCss, children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: '/test', children: "test" }) })] }) })] }));
};
exports.default = MenuLayout;
