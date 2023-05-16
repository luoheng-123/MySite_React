import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import App from "./pages/app";
import Login from "./pages/login";
import Loading from "./components/Loading";
import Achievement from "./components/Achievement";
import Home from './components/Home'
import Tool from './components/Tool'
import Course from './components/Course'
import About from "./components/About";
import Community from './components/Community'

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    loader: Loading,
    children: [
      {
        path: "home",
        element: <Home />,
        loader: Loading,
      },
      {
        path: "achievement",
        element: <Achievement />,
        loader: Loading,
      },
      {
        path: "about",
        element: <About />,
        loader: Loading,
      },
      {
        path: "community",
        element: <Community />,
        loader: Loading,
      },
      {
        path: "course",
        element: <Course />,
        loader: Loading,
      },
      {
        path: "tool",
        element: <Tool />,
        loader: Loading,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    loader: Loading,
    // children: [
    //   {
    //     path: "team",
    //     element: <Team />,
    //     loader: teamLoader,
    //   },
    // ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);