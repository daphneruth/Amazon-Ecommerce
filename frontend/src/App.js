import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeRoute from './Routes/HomeRoute';
import ProductRoute from './Routes/ProductRoute';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';                


function App() {
  return (
    <BrowserRouter>
    <div  className='d-flex  flex-column site-container'>
      <header >
      <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <LinkContainer to ="/">
            <Navbar.Brand>amazona</Navbar.Brand>
            </LinkContainer>
            </Container>
        </Navbar>
        
      </header>
      <main>
        <Container  className="mt-3">
        <Routes>
          <Route path="/product/:slug" element={<HomeRoute/>} />
          <Route path="/" element={<ProductRoute/>} />
        </Routes>
       
        </Container>
       
      </main>
      <footer>
        <div className="text-center">
          All rights reserved.
        </div>
      </footer>
    
    </div>
    </BrowserRouter>
  );
}

export default App;
