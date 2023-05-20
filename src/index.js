import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Add_A_Toy from './Components/Add A Toy/Add_A_Toy';
import All_Toys from './Components/All Toys/All_Toys';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import Blgos from './Components/Blgos/Blgos';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import My_Toys from './Components/My Toys/My_Toys';
import PrivateRoutes from './Components/PrivateRoutes/PrivateRoutes';
import Update_My_Toys from './Components/My Toys/Update_My_Toys';
import ToyDetails from './Components/All Toys/ToyDetails';



const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },

      {
        path: "/addAToy",
        element: <PrivateRoutes>
          <Add_A_Toy></Add_A_Toy>
        </PrivateRoutes>
      },

      {
        path: "/myToys",
        element: <PrivateRoutes><My_Toys></My_Toys></PrivateRoutes>
      },

      {
        path:'/updateMyToys/:id',
        element:<Update_My_Toys></Update_My_Toys>,
        loader:({params}) => 
        fetch(`http://localhost:5000/UpdateMyToys/${params.id}`)
      },


      {
        path: "/allToy",
        element: <All_Toys />,
        
      },

      {
        path: "ToyDetails/:id",
        element: <ToyDetails/>,
        loader:({params}) => 
        fetch(`http://localhost:5000/ToyDetails/${params.id}`)
      },

      {
        path: "/blog",
        element: <Blgos />,
      },


      {
        path: "/footer",
        element: <Footer></Footer>
      },


      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/register",
        element: <Registration></Registration>
      }


    ]
  },
]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>

);
reportWebVitals();
