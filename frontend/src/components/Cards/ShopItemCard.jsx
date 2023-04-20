import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CartContext } from '../../contexts/ShoppingCartProvider';

function ShopItemCard({ name, price, tax, id }) {
  const { addItemToCart } = useContext(CartContext);
  
  const handleClick = () => {
    addItemToCart({ name, price, tax, id});
  };

  return (
    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <p>Preço: {price}</p>
          
          <p>Imposto: {tax}</p>
        </Card.Text>
        <Button variant="primary" onClick={handleClick}>Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default ShopItemCard;