import data from './data';
import { ReactDOM } from 'react';
import {BrowserRouter } from 'react-router-dom ';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div>
      <header >
        <a href ="/"> Amazon </a>
      </header>
      <main>
        <h1>Featured Products</h1>
         
  
          <div  className='products'>
            {data.products.map(product =>(
            <div className="product" key={product.slug}>
              <a href={`/product/${product.slug}`}>
            <img src={product.image} alt={product.name} />
            </a>
            <div className="product-info">
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button>Add to Cart</button>
            </div>
          </div>))}
      
      </div>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
