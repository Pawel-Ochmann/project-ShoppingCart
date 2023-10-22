import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ItemCart from './components/ItemCart.jsx';
import UserCart from './components/UserCart.jsx';
import LogIn from './components/LogIn.jsx';
import App from './App.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/itemcart',
    element: <ItemCart />,
  },
  {
    path: '/usercart',
    element: <UserCart />,
  },
  {
    path: '/login',
    element: <LogIn />,
  },
]);

const Router = ()=> {
    return (
        <RouterProvider router={router}/>
    )
}

export default Router;