"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
// 이미지 파일 impoat
// import nameIcon from './icons/name.svg';
// import birthIcon from './icons/birth.svg';
// import careerIcon from './icons/career.svg';
// import educationIcon from './icons/education.svg';
// import emailIcon from './icons/email.svg';
// import phoneIcon from './icons/phone.svg';
const test = () => {
    (0, react_1.useEffect)(() => {
        console.log('test');
    }, []);
    const introductionData = [
        // { label: '이름', value: '홍길동', icon: nameIcon },
        // { label: '생년월일', value: '1990-01-01', icon: birthIcon },
        // { label: '경력', value: '소프트웨어 엔지니어, ABC 주식회사', icon: careerIcon },
        // { label: '학력', value: '컴퓨터 공학 학사, 가나다 대학교', icon: educationIcon },
        // { label: '이메일', value: 'hong@example.com', icon: emailIcon },
        // { label: '전화번호', value: '010-1234-5678', icon: phoneIcon },
        { label: '이름', value: '홍길동', icon: '' },
        { label: '생년월일', value: '1990-01-01', icon: '' },
        { label: '경력', value: '소프트웨어 엔지니어, ABC 주식회사', icon: '' },
        { label: '학력', value: '컴퓨터 공학 학사, 가나다 대학교', icon: '' },
        { label: '이메일', value: 'hong@example.com', icon: '' },
        { label: '전화번호', value: '010-1234-5678', icon: '' },
    ];
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { children: "\uC790\uAE30\uC18C\uAC1C \uD398\uC774\uC9C0" }), (0, jsx_runtime_1.jsx)("div", { className: "introduction-container", children: introductionData && introductionData.map((item, index) => ((0, jsx_runtime_1.jsxs)("div", { className: "introduction-item", children: [(0, jsx_runtime_1.jsx)("img", { src: item.icon, alt: item.label, className: "icon" }), (0, jsx_runtime_1.jsx)("div", { className: "label", children: item.label }), (0, jsx_runtime_1.jsx)("div", { className: "value", children: item.value })] }, index))) })] }));
};
exports.default = test;
