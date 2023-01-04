import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
//import data from '../data'

function HomeRoute() {
  const [products, setProducts] = useState([])

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