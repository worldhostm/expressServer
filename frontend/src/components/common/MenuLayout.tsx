import React, { ReactNode, useState } from 'react';
import {Link} from 'react-router-dom';

interface MenuItem {
  id: number;
  label: string;
  link: string;
}
interface MenuLayoutProps {
  children: ReactNode;
}


const menuItems: MenuItem[] = [
  { id: 1, label: 'Home', link: '/' },
  { id: 2, label: 'About', link: '/about' },
  { id: 3, label: 'Contact', link: '/list' },
];

const MenuLayout: React.FC<MenuLayoutProps> = ({ children }) => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<number | null>(null);

  const handleMenuItemClick = (id: number) => {
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

  return (
      <div className="menu-layout" style={menuLayoutCss}>
        <div>Logo 또는 제목</div>
        <nav className="menu">
          <ul style={menuCss}>
            <li style={menuCss}><Link to ={'/'}>Home</Link></li>
            <li style={menuCss}><Link to ='/about'>About Me</Link></li>
            <li style={menuCss}><Link to ={'/list'}>List</Link></li>
            <li style={menuCss}><Link to ={'/test'}>test</Link></li>
          </ul>
        </nav>
      </div>
  );
};

export default MenuLayout;
