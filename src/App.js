import './App.css';
import { Navbar, Exchanges, Homepage, Cryptocurrencies, Cryptodetails, News } from './components';
import {Layout, Typography, Space} from 'antd';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="app">
        <div className="navbar">
            <Navbar />
        </div>
        <div className="main">
            <Layout>
                <div className="routes">
                    <Routes>  
                       <Route exact path='/exchanges' element={<Exchanges />} />
                       <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />} />
                       <Route path='/crypto/:coinId' element={<Cryptodetails />} />
                       <Route path='/news' element={<News />} />
                       <Route exact path='/' element={<Homepage />} />
                    </Routes>
                </div>
            </Layout>
        <div className="footer">
            <Typography.Title level={5} style={{color:'white', textAlign: 'center'}}>
                CryptoApp <br />
                All Rights Reserved
            </Typography.Title>
            <Space>
                <Link to='/'>Home</Link>
                <Link to='/cryptocurrencies'>Exchanges</Link>
                <Link to='/news'>News</Link>
            </Space>
           </div>
        </div>
      </div>
    </Router>  
  );
}

export default App;
