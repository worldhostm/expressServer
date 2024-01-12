"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// MenuLayout.tsx
const react_1 = require("react");
const menuItems = [
    { id: 1, label: 'Home', link: '/' },
    { id: 2, label: 'About', link: '/about' },
    { id: 3, label: 'Contact', link: '/contact' },
];
const MenuLayout = ({ children }) => {
    const [selectedMenuItem, setSelectedMenuItem] = (0, react_1.useState)(null);
    const handleMenuItemClick = (id) => {
        setSelectedMenuItem(id);
        // 여기에서 해당 메뉴에 대한 추가 로직을 수행할 수 있습니다.
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "menu-layout", children: [(0, jsx_runtime_1.jsx)("nav", { className: "menu", children: (0, jsx_runtime_1.jsx)("ul", { children: menuItems.map((item) => ((0, jsx_runtime_1.jsx)("li", { className: selectedMenuItem === item.id ? 'active' : '', children: (0, jsx_runtime_1.jsx)("a", { href: item.link, onClick: () => handleMenuItemClick(item.id), children: item.label }) }, item.id))) }) }), (0, jsx_runtime_1.jsx)("main", { className: "content", children: children })] }));
};
exports.default = MenuLayout;
