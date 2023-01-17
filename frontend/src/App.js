import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';                
//import ProductScreen from '../../../mern-amazona/frontend/src/screens/ProductScreen';
//import HomeScreen from '../../../mern-amazona/frontend/src/screens/HomeScreen';


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
          <Route path="/product/:slug" element={<ProductScreen/>} />
          <Route path="/" element={<HomeScreen/>} />
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
