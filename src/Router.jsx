import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LogIn from './components/LogIn.jsx';
import App from './App.jsx';
import ChampionList from './components/ChampionList.jsx';

export const routes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <LogIn />,
  },
  {
    path:'/champions',
    element:<ChampionList />
  }
];


const router = createBrowserRouter(routes);

const Router = ()=> {
    return (
        <RouterProvider router={router}/>
    )
}

export default Router;