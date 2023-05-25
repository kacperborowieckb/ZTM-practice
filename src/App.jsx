import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './routes/home/Home';
import Shop from './routes/shop/Shop';

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
