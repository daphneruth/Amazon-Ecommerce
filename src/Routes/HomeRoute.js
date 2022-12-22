import React from 'react'

function HomeRoute() {
  return (
    <div>
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
    </div>
  )
}

export default HomeRoute