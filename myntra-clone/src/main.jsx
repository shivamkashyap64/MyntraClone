import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Bag from  "./routes/Bag.jsx";
import ReactDOM from 'react-dom/client';
import React from 'react'
import Home from './routes/Home.jsx'
import {Provider} from "react-redux";
import myntraStore from './store/index.js';
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";



const router = createBrowserRouter([
  {path: "/",
    element:<App/>,
    children:[
      {path:"/", element: <Home/> },
      {path:"/bag", element:<Bag/>  }
    
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
