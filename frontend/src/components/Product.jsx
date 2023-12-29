import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Rating from "./Rating";

const Product = ({ product }) => {

    return (
        
        <Card className="my-3 p-3 rounded">
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top'/>
            </Link>
            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as='div'>
                        <strong>{product.name} </strong>    
                    </Card.Title>    
                </Link>
                <Card.Text as='div'>
                    <Rating value= {product.Rating} text={`${product.numReviews} reviews` } >
                    </Rating>
                </Card.Text>
                <Card.Text as="h3">
                    {product.price}€
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                { product.countInStock <= 0 &&
                    <p class="text-danger" align='right' > Out Of Stock</p>
                }
            </Card.Footer>
        </Card>
    )

}
export default Product