import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartDropdown from '../cart-dropdown/CartDropdown';
import CartIcon from '../cart-icon/CartIcon';
import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.styles';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { useDispatch } from 'react-redux';
import { signOutStart } from '../../store/user/user.action';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();

  const signOutUser = () => dispatch(signOutStart());

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
