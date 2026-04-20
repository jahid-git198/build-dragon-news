import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import Left from "../Leftassest/Left";
import CatagorisNews from "../CatagorisNewq/CatagorisNews";
import Authentication from "../AuthloginRegister/Authentication";
import Login from "../AuthloginRegister/Login/Login";
import Register from "../AuthloginRegister/Register/Register";
import NewscardDetales from "../NewscardDetales/NewscardDetales";
import Privete from "../PrivateRoute/Privete";
import Loading from "../PrivateRoute/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <div>not found</div>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "catagorisnews/:id",
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loading></Loading>,
        Component: CatagorisNews,
      },
    ],
  },
  {
    path: "/auth",
    element: <Authentication></Authentication>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "NewscardDetales/:id",
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <Loading></Loading>,
    element: (
      <Privete>
        <NewscardDetales></NewscardDetales>
      </Privete>
    ),
  },
]);
