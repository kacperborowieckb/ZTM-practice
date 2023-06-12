import { useContext } from 'react';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { CartContext } from '../../contexts/cart';
import { signOutUser } from '../../utils/firebase/firebase';
import CartDropdown from '../cart-dropdown/CartDropdown';
import CartIcon from '../cart-icon/CartIcon';
import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.styles';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(CartContext);

  return (
    <NavigationContainer>
      <LogoContainer className="logo-container" to={'/'}>
        <CrwnLogo />
      </LogoContainer>
      <NavLinks className="nav-links-container">
        <NavLink className="nav-link" to={'/shop'}>
          SHOP
        </NavLink>
        {currentUser ? (
          <NavLink as="span" onClick={signOutUser}>
            SIGN-OUT
          </NavLink>
        ) : (
          <NavLink className="nav-link" to={'/auth'}>
            SIGN IN
          </NavLink>
        )}
        <CartIcon />
      </NavLinks>
      {isCartOpen && <CartDropdown />}
    </NavigationContainer>
  );
};

export default Navigation;
