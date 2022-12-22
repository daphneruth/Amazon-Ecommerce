import {useParams} from 'react-router-dom';

function ProductRoute() {
    const params =useParams();
    const {slug}= params;
  return (
    <h1>{slug}</h1>
  )
}

export default ProductRoute;