import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeRoute from './Routes/HomeRoute';
import ProductRoute from './Routes/ProductRoute';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <BrowserRouter>
    <div>
      <header >
      <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
            <Navbar.Brand>amazona</Navbar.Brand>
              </Container>

        <Link to ="/"> Amazon </Link>
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
