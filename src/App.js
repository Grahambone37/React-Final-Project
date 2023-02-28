import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Nav } from 'react-bootstrap';

import Home from './components';
import UseItems from './components/items/use-items';
import Tms from './components/items/tms';
import Berries from './components/items/berries';
import Checkout from './components/checkout';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <h1>Poke-Mart</h1>
          <Container>
            <Nav defaultActiveKey="/use-items">
              <Nav.Item>
                <Nav.Link href="/use-items" to="/use-items">Use Items</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/tms" to="/tms">Tms</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/berries" to="/berries">Berries</Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav>
              <Nav.Item>
                <Nav.Link href="/checkout" to="/checkout">Checkout</Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/use-items" element={<UseItems />} />
          <Route path="/tms" element={<Tms />} />
          <Route path="/berries" element={<Berries />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>

        
      </Router>
    </div>
  );
}

export default App;
