import React, { useContext } from 'react';
import { CartContext } from '../../contexts/ShoppingCartProvider';
import { Container, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import BuyButton from '../Buttons/BuyButton';


export default function CartOverview() {
  const { cartItems, cartTotal, removeItemFromCart } = useContext(CartContext);

  const handleRemoveItem = (item) => {
    removeItemFromCart(item);
  };

  return (
    <Container className="my-5">
      <h2 className="mb-4">Carrinho</h2>
      {cartItems.length > 0 ? (
        <ListGroup>
          {cartItems.map((item) => (
            <ListGroupItem key={item.name}>
              <div>{item.name}</div>
              <div className="d-flex justify-content-between align-items-center">
                <div>Preço: ${parseInt(item.price).toFixed(2)}</div>
                <div>Imposto: {parseInt(item.tax).toFixed(2)}%</div>
                <Button variant="danger" onClick={() => handleRemoveItem(item)}>
                  <FaTrash />
                </Button>
              </div>
            </ListGroupItem>
          ))}
          <ListGroupItem className="d-flex justify-content-between align-items-center">
            <div>Total:</div>
            <div>${cartTotal.toFixed(2)}</div>
          </ListGroupItem>
          <BuyButton cart={cartItems}/>
        </ListGroup>
      ) : (
        <p>Seu carrinho está vazio.</p>
      )}
    </Container>
  );
}