import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LogIn from './components/LogIn.jsx';
import App from './App.jsx';

export const routes = [
  {
    path: '/',
    element: <App />,
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