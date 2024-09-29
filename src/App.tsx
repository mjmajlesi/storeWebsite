import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom';
import NavbarSite from './components/NavBar';
import Main from './pages/main';
import Layout from './pages/layout';
import Store from './pages/store';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';
import { useAppContext } from './components/AppContext';
import PrivateRoute from './components/privateRoute';
import Login from './pages/Login';
function App() {
  const {login} = useAppContext()
  return (
      <>
        <Layout >
          <NavbarSite />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/store' element={<Store />} />
            <Route path='/login' element={ login ? <Navigate to={"/"} /> :<Login />} />
            <Route path='/product/:id' element={<ProductPage />} />
            <Route element={<PrivateRoute />}>
              <Route path='/cart' element={<Cart />} />
            </Route>
          </Routes>
        </Layout>
      </>
  );
}

export default App;
