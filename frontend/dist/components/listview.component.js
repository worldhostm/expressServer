"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const NewsRow_component_1 = __importDefault(require("../components/NewsRow.component"));
const ListView = () => {
    const [articles, setArticles] = (0, react_1.useState)(null);
    const apiGet = (type, param) => __awaiter(void 0, void 0, void 0, function* () {
        const apiUrl = '/search/' + type + '/' + param;
        yield fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((resp) => {
            if (resp.code === '00') {
                setArticles(resp.data);
                console.log(resp);
            }
            else {
                throw new Error('error');
            }
        });
    });
    (0, react_1.useEffect)(() => {
        apiGet('news', 'React');
    }, []);
    return ((0, jsx_runtime_1.jsx)("div", { className: "listArea", children: (0, jsx_runtime_1.jsx)("ul", { className: "listView", children: articles &&
                articles.items &&
                ((articles.type === 'news') ?
                    articles.items.map((v, inx) => {
                        return (0, jsx_runtime_1.jsx)(NewsRow_component_1.default, Object.assign({}, v), inx);
                    })
                    : '') }) }));
};
exports.default = ListView;
