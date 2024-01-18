import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ItemCart from './components/ItemCart.jsx';
import UserCart from './components/UserCart.jsx';
import LogIn from './components/LogIn.jsx';
import App from './App.jsx';

export const routes = [
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
];


const router = createBrowserRouter(routes);

const Router = ()=> {
    return (
        <RouterProvider router={router}/>
    )
}

export default Router;