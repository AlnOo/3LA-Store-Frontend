import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom';
import ContextFilter from './components/Context/ContextFilter';
import ContextProvider from './components/Context/ContextProvider';
import Details from './components/Details/Details';
import FavoritePage from './components/Favorite/FavoritePage';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Login from './components/Login/Login';
import User from './components/User/User';

function App() {
  let router = useRoutes([
    { path: '/', element: <Products /> },
    { path: '/:id', element: <Details /> },
    { path: '/favorite', element: <FavoritePage /> },
    { path: '*', element: <Navigate to={'/'} /> },
    { path: '/login', element: <Login />},
    { path: '/signup', element: <User />},
  ])
  return (
    <ContextProvider>
      <ContextFilter>
        <Header />
        {router}
      </ContextFilter>
    </ContextProvider>
  );
}

export default App;
