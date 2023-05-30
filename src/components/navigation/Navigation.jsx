import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user';
import { signOutUser } from '../../utils/firebase/firebase';
import './navigation.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

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
      </div>
    </div>
  );
};

export default Navigation;
