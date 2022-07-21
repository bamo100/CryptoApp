import React, { useState, useEffect } from 'react';
import {Button, Menu, Typography, Avatar} from 'antd';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined, UserOutlined, FundOutlined, MenuOutlined} from '@ant-design/icons';
import icon from '../images/cryptocurrency.png';

function Navbar() {
   const [activeMenu, setActiveMenu] = useState(true);
   const [screensize, setScreenSize] = useState(null);

   useEffect(() => {
     const handleResize = () => setScreenSize(window.innerWidth);

     window.addEventListener('resize', handleResize);

     handleResize();

     return () => window.removeEventListener('resize', handleResize)
   }, []);

   useEffect(() => {
      if(screensize < 760){
          setActiveMenu(false)
      }else{
        setActiveMenu(true)
      }
   }, [screensize])

   function getItem(label, key, icon, children, type) {
      return {
        key,
        icon,
        children,
        label,
        type,
      };
    }

 const items = [
   getItem(<Link to='/'>Home</Link>, '1', <HomeOutlined />),
   getItem(<Link to='/cryptocurrencies'>Cryptocurrencies</Link>, '2', <FundOutlined />),
   getItem(<Link to='/exchanges'>Exchanges</Link>, '3', <MoneyCollectOutlined />),
   getItem(<Link to='/news'>News</Link>, '4', <BulbOutlined />)
 ]

  return (
    <div className='nav-container'>
        <div className="logo-container">
            <Avatar src={icon} size="large" />
            <Typography.Title level={2} className='logo'>
                <Link to='/'>CryptoApp</Link>
            </Typography.Title>
            <Button className='menu-control-container' onClick={() => setActiveMenu(!activeMenu)}>
                 <MenuOutlined />
            </Button>
        </div>    
        {activeMenu && (
           <Menu  theme='dark' mode='vertical' items={items} />
        )}
        
    </div>
  )
}

export default Navbar