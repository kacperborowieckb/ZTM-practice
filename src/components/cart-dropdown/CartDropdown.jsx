import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles.jsx';
import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';
import { useNavigate } from 'react-router-dom';
import { selectCartItems } from '../../store/cart/cart.selector.js';
import { useSelector } from 'react-redux';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckOutHandler = () => {
    navigate('/checkout');
  };

  return (
    <CartDropdownContainer className="cart-dropdown-container">
      <CartItems className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => <CartItem cartItem={cartItem} key={cartItem.id} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckOutHandler}>Go to checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
