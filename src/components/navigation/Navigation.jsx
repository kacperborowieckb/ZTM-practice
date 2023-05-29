import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.scss';

const Navigation = () => {
  return (
    <div className="navigation">
      <Link className="logo-container" to={'/'}>
        <CrwnLogo />
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to={'/shop'}>
          SHOP
        </Link>
        <Link className="nav-link" to={'/sign-in'}>
          SIGN-IN
        </Link>
      </div>
    </div>
  );
};

export default Navigation;