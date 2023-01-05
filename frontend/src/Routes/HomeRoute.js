import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
//import data from '../data'


const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeRoute() {
  
 // const [products, setProducts] = useState([])

   useEffect(() =>{
    const fetchData = async ()=>{
      const results = axios.get('api/products')
      setProducts(results.data)
    };
    fetchData();
   })
  return (
    <div>
       <h1>Featured Products</h1>
          <div  className='products'>
            {products.map(product =>(
            <div className="product" key={product.slug}>
              <Link to={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">

            <Link to={`/product/${product.slug}`}>
            <p>{product.name}</p>
              </Link>
          
            <p>{product.price}</p>
            <button>Add to Cart</button>
            </div>
          </div>))}
      
      </div>
    </div>
  )
}

export default HomeRoute