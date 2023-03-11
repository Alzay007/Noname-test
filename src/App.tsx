import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Footer } from './components/Footer';
import { Header, ROUTER } from './components/Header';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <>
      <Header />
      <div className='section'>
        <Routes>
          <Route path={ROUTER.home} element={<HomePage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
