import { useEffect, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Footer } from './components/Footer';
import { Header, ROUTER } from './components/Header';
import { useAppDispatch, useAppSelector } from './features/hooks/hooks';
import { fetchGoods } from './features/reducers/actionCreators';
import { addItems } from './features/reducers/cartSlice';
import { CartPage } from './pages/CartPage';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { GoodsPage } from './pages/GoodsPage';
import { ProductDetailPage } from './pages/ProductDetailPage/ProductDetailPage';
import { SignUpPage } from './pages/SignUpPage/SignUpPage';
import { AccountPage } from './pages/AccountPage';

function App() {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector(state => state.cartReducer)
  const { goods } = useAppSelector(state => state.goodsReducer);

  useEffect(() => {
    dispatch(fetchGoods());
    const idArray = window.localStorage.getItem('id');

    if (idArray) {
      dispatch(addItems(JSON.parse(idArray)));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('id', JSON.stringify(items));
  }, [items]);

  const phonesList = useMemo(() => {
    return goods.filter((item) => item.category === 'phones')
  }, [goods])

  const tabletsList = useMemo(() => {
    return goods.filter((item) => item.category === 'tablets')
  }, [goods])

  const laptopsList = useMemo(() => {
    return goods
      .filter((item) => item.category === 'laptops')
  }, [goods])

  const watchesList = useMemo(() => {
    return goods.filter((item) => item.category === 'watches')
  }, [goods])

  return (
    <>
      <Header />
      <div className='section'>
        <Routes>
          <Route path={ROUTER.home} element={<HomePage />} />
          <Route
            path={ROUTER.phones}
            element={<GoodsPage goodsList={phonesList} title={'Phones'} />}
          />
          <Route
            path={ROUTER.tablets}
            element={<GoodsPage goodsList={tabletsList} title={'Tablets'} />}
          />
          <Route
            path={ROUTER.laptops}
            element={<GoodsPage goodsList={laptopsList} title={'Laptops'} />}
          />
          <Route
            path={ROUTER.watches}
            element={<GoodsPage goodsList={watchesList} title={'Watches'} />}
          />
          <Route path={ROUTER.cart} element={<CartPage />} />
          <Route path={ROUTER.login} element={<LoginPage />} />
          <Route path={ROUTER.signUp} element={<SignUpPage />} />
          <Route path={ROUTER.account} element={<AccountPage />} />
          <Route path={ROUTER.productDetalePage} element={<ProductDetailPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
