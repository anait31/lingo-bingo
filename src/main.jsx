import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Main from './components/Main/Main';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import StartLearning from './components/StartLearning/StartLearning';
import Tutorials from './components/Tutorials/Tutorials';
import AboutUs from './components/AboutUs/AboutUs';
import Home from './components/Home/Home';
import MyProfile from './components/MyProfile/MyProfile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/start-learning',
        element: <StartLearning></StartLearning>
      },
      {
        path: '/tutorials',
        element: <Tutorials></Tutorials>
      },
      {
        path: '/about-us',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/my-profile',
        element: <MyProfile></MyProfile>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)