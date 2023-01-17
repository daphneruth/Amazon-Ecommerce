import {useReducer, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {logger }from  "use-reducer-logger"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Product from '../Components/Product'

//creating reducer function

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
 
  const [{ loading, error, products }, dispatch]=useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }

      
    };
    fetchData();
  }, []);
  return (
    
       <div>
       <h1>Featured Products</h1>
          <div  className='products'>

            {loading? (
              <div>Loading...</div>
            ) : error ? (
               <div>error</div>)
              :(
              <Row>
                { products.map(product =>(
                  <Col  sm={6} md={4} lg={3}>
                   <Product product={product}></Product>
                  </Col>
                
                 ))}
              </Row>
               
                
                 
                 
                ) 
      
            }
            </div>
      
    </div>

    
   
  )
}

export default HomeRoute