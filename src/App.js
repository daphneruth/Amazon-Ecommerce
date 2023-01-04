import { BrowserRouter, Route,Link, Routes } from 'react-router-dom ';
import HomeRoute from './Routes/HomeRoute';
import ProductRoute from './Routes/ProductRoute';

function App() {
  return (
    <BrowserRouter>
    <div>
      <header >
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
