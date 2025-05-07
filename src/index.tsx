import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import  List  from "./list/List";
import  Main  from "./main/Main";
import Building from "./building/Building"
import reportWebVitals from './reportWebVitals';
import Chart from './chart/Chart';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import InputHW from './InputHW/InputHW';

const router = createBrowserRouter([
  {
    path: "",
    element: <Main />,
  },
  {
    path: "/list",
    element: <List />,
  },
  {
    path: "/building/:id",
    element: <Building/>,
  },
  {
    path: "/chart",
    element: <Chart/>,
  },
  {
    path:"/input",
    element: <InputHW/>
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
