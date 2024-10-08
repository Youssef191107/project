import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { store } from './Redux/store';
import noval from "noval";
import createDispatch from './Components/Noval/NovalHelper';
import './Components/i18next/i18n'

const ProviderNoval = noval({
  items: localStorage.getItem("items") !== null ?
    JSON.parse(localStorage.getItem("items"))
    : [],
  total: 0,
  user: null
}, createDispatch);

const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProviderNoval>
    <RouterProvider router={router} />
  </ProviderNoval>
);

