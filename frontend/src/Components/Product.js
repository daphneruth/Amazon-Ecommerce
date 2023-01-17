import { Button } from "bootstrap";

function Product (props) {
    const { product} = props;
    return(
        <Card  key={product.slug}>
        <Link to={`/product/${product.slug}`}>
          <img src={product.image} alt={product.name} />
      </Link>
      <Card.Body>

      <Link to={`/product/${product.slug}`}>
      <Card.Title>{product.name}</Card.Title>
        </Link>
        <Card.Text>${product.price}</Card.Text>
        <Button>Add to Cart</Button>
     </Card.Body>
     </Card>

    )
}
export default Product