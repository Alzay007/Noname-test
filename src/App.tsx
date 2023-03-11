import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Footer } from './components/Footer';
import { Header, ROUTER } from './components/Header';
import { useAppDispatch, useAppSelector } from './features/hooks/hooks';
import { fetchGoods } from './features/reducers/actionCreators';
import { addItems } from './features/reducers/cartSlice';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PhonesPage } from './pages/PhonesPage';

function App() {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector(state => state.cartReducer)

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

  return (
    <>
      <Header />
      <div className='section'>
        <Routes>
          <Route path={ROUTER.home} element={<HomePage />} />
          <Route path={ROUTER.phones} element={<PhonesPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
