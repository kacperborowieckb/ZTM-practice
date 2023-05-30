import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user';
import { CartContext } from '../../contexts/cart';
import { signOutUser } from '../../utils/firebase/firebase';
import CartDropdown from '../cart-dropdown/CartDropdown';
import CartIcon from '../cart-icon/CartIcon';
import './navigation.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <div className="navigation">
      <Link className="logo-container" to={'/'}>
        <CrwnLogo />
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to={'/shop'}>
          SHOP
        </Link>
        {currentUser ? (
          <span onClick={signOutUser}>SIGN-OUT</span>
        ) : (
          <Link className="nav-link" to={'/auth'}>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {isCartOpen && <CartDropdown />}
    </div>
  );
};

export default Navigation;
