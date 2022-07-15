import React from 'react';
import {Button, Menu, Typography, Avatar} from 'antd';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined, UserOutlined, FundOutlined} from '@ant-design/icons';
import icon from '../images/cryptocurrency.png'

function Navbar() {
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
        </div>    
        <Menu  theme='dark' mode='vertical' items={items} />
    </div>
  )
}

export default Navbar