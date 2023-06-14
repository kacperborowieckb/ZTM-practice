import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Authentication from './routes/authentication/Authentication';
import Checkout from './routes/checkout/Checkout';
import Home from './routes/home/Home';
import Shop from './routes/shop/Shop';
import { useEffect } from 'react';
import { checkUserSession } from './store/user/user.action';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Routes>
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
