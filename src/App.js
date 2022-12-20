import data from './data';
import './App.css';

function App() {
  return (
    <div>
      <header >
        <a href ="/"> Amazon </a>
      </header>
      <main>
        <h1>Featured Products</h1>
         
  
          <div  className='products'>
            {data.products.map(product =>(
            <div className="product" key={product.slug}>
            <img src={product.image} alt={product.name} />
            <div className="product-info">
            <p>{product.name}</p>
            <p>{product.price}</p>
            </div>
          </div>))}
      
      </div>
      </main>
    </div>
  );
}

export default App;
