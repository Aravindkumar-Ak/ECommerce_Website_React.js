import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './components/Products';

import ProductInfo from './components/ProductInfo';
import { Provider } from 'react-redux';
import Cart from './components/Cart';
import { store } from './features/store';




const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[{
      path:"/",
      element:<Products/>
    },
    {
path:"/product/:pId",
element:<ProductInfo/>
    },
  {
    path:"/Cart",
    element:<Cart/>
  }]
  }
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}>
   <RouterProvider router={appRouter}/>
   </Provider>
  </React.StrictMode>
  
);


