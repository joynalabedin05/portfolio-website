import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Main from './components/Main';
import Home from './components/Home/Home';
import AboutMyself from './components/AboutMyself';
import ContactMyself from './components/ContactMyself';
import MyProject from './components/MyProject';
import MyProfile from './components/MyProfile';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/aboutme",
        element: <AboutMyself></AboutMyself>,
      },
      {
        path: "/contacts",
        element: <ContactMyself></ContactMyself>,
      },
      {
        path: "/projects",
        element: <MyProject></MyProject>,
      },
      {
        path: "/profile",
        element: <MyProfile></MyProfile>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
