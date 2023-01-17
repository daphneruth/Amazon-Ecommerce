import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeRoute from './Routes/HomeRoute';
import ProductRoute from './Routes/ProductRoute';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-router-bootstrap';

function App() {
  return (
    <BrowserRouter>
    <div>
      <header >
      <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Linkcontainer to ="/">
            <Navbar.Brand>amazona</Navbar.Brand>
            </Linkcontainer>
            </Container>
        </Navbar>
        
      </header>
      <main>
        <Routes>
          <Route path="/product/:slug" element={<HomeRoute/>} />
          <Route path="/" element={<ProductRoute/>} />
        </Routes>
       
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
