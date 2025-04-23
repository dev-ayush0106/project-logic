import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import SignIn from './Components/SignIn';
import LayoutComponent from './Components/LayoutComponent';
import NoPage from './Components/NoPage';
import Details from './Components/Details';
import List from './Components/List';

const router = createBrowserRouter([
  {
    path:"/",
    element:<LayoutComponent/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
    
      {
        path:"/signin",
        element:<SignIn/>
      },

      {
        path:"/details/:id",
        element:<Details/>
      },
      {
        path:"hotels",
        element:<List/>
      }

    ]
  },
  
  {
    path:"*",
    element:<NoPage/>
  }
  
])
const App = () => {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
