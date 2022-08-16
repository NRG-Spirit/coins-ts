import './App.css';
import { Routes, Route } from 'react-router-dom';

import { useEffect } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import { authRoutes, publicRoutes } from './Routes';
import { fetchExchangeRates } from './http/API';

import { useAppSelector, useAppDispatch } from './utils/hooks';
import { setExchangeRates, setError, setUserData } from './redux/userReducer';

function App() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state?.user?.data?.name);

  useEffect(() => {
    fetchExchangeRates()
      .then(response => {
        dispatch(setExchangeRates(response.data));
      },
      )
      .catch(error => dispatch(setError(error.message)));
  }, [dispatch]);

  useEffect(() => {
    const localUserData = localStorage.getItem('user');
    if (localUserData) {
      const userData = JSON.parse(localUserData);
      dispatch(setUserData(userData));
    }
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        <Routes>
          {user && authRoutes.map(({ path, element }) =>
            <Route key={path} path={path} element={element} />,
          )}
          {publicRoutes.map(({ path, element }) =>
            <Route key={path} path={path} element={element} />,
          )}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;