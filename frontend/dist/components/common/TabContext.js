"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTabContext = exports.TabProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const TabContext = (0, react_1.createContext)(undefined);
const TabProvider = ({ children }) => {
    const [currentTab, setCurrentTab] = (0, react_1.useState)(1);
    const tabs = [
        { id: 1, title: 'Tab 1', content: 'Content for Tab 1' },
        { id: 2, title: 'Tab 2', content: 'Content for Tab 2' },
    ];
    const value = {
        currentTab,
        tabs,
        setCurrentTab,
    };
    return (0, jsx_runtime_1.jsx)(TabContext.Provider, { value: value, children: children });
};
exports.TabProvider = TabProvider;
const useTabContext = () => {
    const context = (0, react_1.useContext)(TabContext);
    if (!context) {
        throw new Error('useTabContext must be used within a TabProvider');
    }
    return context;
};
exports.useTabContext = useTabContext;
