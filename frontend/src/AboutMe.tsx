import React,{ useEffect } from 'react';
import './css/testCss.css';
import phoneIcon from './img/phone.png';
import userIcon from './img/user.png'
import careerIcon from './img/career.png';
import birthIcon from './img/birth.png';
import emailIcon from './img/email.png';
import academicIcon from './img/academic.png';

const AboutMe: React.FC = () => {

useEffect(()=>{
    console.log('AboutMe');
},[]);

const styleFlex = {
  flex : 1
}

  const introductionData = [
    { label: '이름', value: '조성민', icon: userIcon},
    { label: '생년월일', value: '1991-11-13', icon: birthIcon },
    { label: '경력', value: '3년 11개월', icon: careerIcon },
    { label: '학력', value: '동국대학교 중퇴 학점은행제 학사 취득예정' , icon: academicIcon },
    { label: '이메일', value: 'chos1909@gmail.com', icon: emailIcon },
    { label: '전화번호', value: '010-4093-9680', icon: phoneIcon },
  ];

  return (
    <div>
      <div className='pageTitle'><h1>자기소개 페이지</h1></div>
      <div className="introduction-container">
        {introductionData && introductionData.map((item, index) => (
          <div key={index} className="introduction-item" > 
            <img src={item.icon} alt={item.label} className="icon"/>
            <div className="label">{item.label}</div>
            <div className="value" >{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
